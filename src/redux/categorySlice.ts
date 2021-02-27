import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { categories, createCategory, delCategory } from '../lib/apollo/category';
import { Categories, MutationCreateCategoryArgs, QueryCategoriesArgs } from '../lib/apollo/types';
import { resetQueryStatus } from './globalActions';
import { QueryState } from './types';

const sliceName = 'category';

type FetchCategoriesMode = 'fetch' | 'fetch-more';
interface FetchCategoriesArgs {
    variables: QueryCategoriesArgs;
    mode: FetchCategoriesMode;
}
export const fetchCategories = createAsyncThunk(
    `${sliceName}/fetchCategories`,
    async ({ variables, mode }: FetchCategoriesArgs) => {
        const result = await categories(variables);
        return {
            result,
            mode,
        };
    },
    {
        condition: (_, { getState }) => {
            const {
                category: { fetchCategoriesState },
            } = getState() as { category: CategoryState };
            if (fetchCategoriesState === 'loading') return false;
            return true;
        },
    },
);

export const createNewCategory = createAsyncThunk(
    `${sliceName}/createNewCategory`,
    async (variables: MutationCreateCategoryArgs) => {
        const result = await createCategory(variables);
        return result;
    },
);

export const deleteCategory = createAsyncThunk(`${sliceName}/delCategory`, async (id: number) => {
    const result = await delCategory({
        id,
    });
    return result;
});

interface CategoryState {
    categories: Categories;
    fetchCategoriesState: QueryState;
    createCategoryState: QueryState;
    deleteCategoryState: QueryState;
}

const initialState: CategoryState = {
    categories: {
        data: [],
        paginationInfo: {
            total: 0,
            cursor: null,
            more: true,
        },
        meta: {
            searchTotal: null,
        },
    },
    fetchCategoriesState: 'stateless',
    createCategoryState: 'stateless',
    deleteCategoryState: 'stateless',
};

const categorySlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(resetQueryStatus, (state) => {
            state.createCategoryState = 'stateless';
            state.fetchCategoriesState = 'stateless';
        });

        builder.addCase(fetchCategories.pending, (state) => {
            state.fetchCategoriesState = 'loading';
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            if (action.payload.mode === 'fetch') {
                state.categories = action.payload.result.data.categories;
            } else if (action.payload.mode === 'fetch-more') {
                state.categories.data = [...state.categories.data, ...action.payload.result.data.categories.data];
                state.categories.paginationInfo = action.payload.result.data.categories.paginationInfo;
                state.categories.meta = action.payload.result.data.categories.meta;
            }
            state.fetchCategoriesState = 'success';
        });

        builder.addCase(createNewCategory.fulfilled, (state, action) => {
            if (action.payload.data) {
                state.categories.data.unshift(action.payload.data.createCategory);
                state.categories.paginationInfo.total += 1;
                state.createCategoryState = 'success';
            }
        });

        builder.addCase(deleteCategory.pending, (state) => {
            state.deleteCategoryState = 'loading';
        });
        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            state.categories.data.splice(
                state.categories.data.findIndex((c) => c.id === action.meta.arg.toString()),
                1,
            );
            state.categories.paginationInfo.total -= 1;
        });
    },
});

export const { reducer, actions } = categorySlice;
