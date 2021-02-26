import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { categories, createCategory } from '../lib/apollo/category';
import { Categories, MutationCreateCategoryArgs, QueryCategoriesArgs } from '../lib/apollo/types';

const sliceName = 'category';

export const fetchCategories = createAsyncThunk(
    `${sliceName}/fetchCategories`,
    async (variables: QueryCategoriesArgs) => {
        const result = await categories(variables);
        return result;
    },
);

export const fetchMoreCategories = createAsyncThunk(
    `${sliceName}/fetchMoreCategories`,
    async (variables: QueryCategoriesArgs) => {
        const result = await categories(variables);
        return result;
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
}

const initialState: CategoryState = {
    categories: {
        data: [],
        paginationInfo: {
            total: 0,
            cursor: null,
        },
    },
};

const categorySlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload.data.categories;
        });
        builder.addCase(fetchMoreCategories.fulfilled, (state, action) => {
            state.categories.data = [...state.categories.data, ...action.payload.data.categories.data];
            state.categories.paginationInfo = action.payload.data.categories.paginationInfo;
        });
        builder.addCase(createNewCategory.fulfilled, (state, action) => {
            if (action.payload.data) {
                state.categories.data.unshift(action.payload.data.createCategory);
            }
        });
    },
});

export const { reducer, actions } = categorySlice;
