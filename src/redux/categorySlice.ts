import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { categories } from '../lib/apollo/category';
import { Category, QueryCategoriesArgs } from '../lib/apollo/types';

export const fetchCategories = createAsyncThunk('category/fetchCategories', async (variables: QueryCategoriesArgs) => {
    const result = await categories(variables);
    return result.data.categories;
});

interface CategoryState {
    categories: Category[];
}

const initialState: CategoryState = {
    categories: [],
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload.data;
        });
    },
});

export const { reducer, actions } = categorySlice;
