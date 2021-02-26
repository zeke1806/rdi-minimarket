import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { categories, createCategory } from '../lib/apollo/category';
import { Categories, MutationCreateCategoryArgs, QueryCategoriesArgs } from '../lib/apollo/types';
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
);

export const createNewCategory = createAsyncThunk(
    `${sliceName}/createNewCategory`,
    async (variables: MutationCreateCategoryArgs) => {
        const result = await createCategory(variables);
        return result;
    },
);

interface CategoryState {
    categories: Categories;
    fetchCategoriesStatus: QueryState;
}

const initialState: CategoryState = {
    categories: {
        data: [],
        paginationInfo: {
            total: 0,
            cursor: null,
        },
    },
    fetchCategoriesStatus: 'stateless',
};

const categorySlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.fetchCategoriesStatus = 'loading';
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            if (action.payload.mode === 'fetch') {
                state.categories = action.payload.result.data.categories;
            } else if (action.payload.mode === 'fetch-more') {
                state.categories.data = [...state.categories.data, ...action.payload.result.data.categories.data];
                state.categories.paginationInfo = action.payload.result.data.categories.paginationInfo;
            }
            state.fetchCategoriesStatus = 'success';
        });

        builder.addCase(createNewCategory.fulfilled, (state, action) => {
            if (action.payload.data) {
                state.categories.data.unshift(action.payload.data.createCategory);
            }
        });
    },
});

export const { reducer, actions } = categorySlice;
