import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { categories } from '../lib/apollo/category';
import { Categories, QueryCategoriesArgs } from '../lib/apollo/types';

const sliceName = 'category';

export const fetchCategories = createAsyncThunk(
    `${sliceName}/fetchCategories`,
    async (variables: QueryCategoriesArgs) => {
        const result = await categories(variables);
        return result.data.categories;
    },
);

export const fetchMoreCategories = createAsyncThunk(
    `${sliceName}/fetchMoreCategories`,
    async (variables: QueryCategoriesArgs) => {
        const result = await categories(variables);
        return result.data.categories;
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
            state.categories = action.payload;
        });
        builder.addCase(fetchMoreCategories.fulfilled, (state, action) => {
            state.categories.data = [...state.categories.data, ...action.payload.data];
            state.categories.paginationInfo = action.payload.paginationInfo;
        });
    },
});

export const { reducer, actions } = categorySlice;
