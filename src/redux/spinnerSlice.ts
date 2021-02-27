import { createSlice } from '@reduxjs/toolkit';
import { deleteCategory } from './categorySlice';

const sliceName = 'spinner';

interface SpinnerState {
    visible: boolean;
}
const initialState: SpinnerState = {
    visible: false,
};

const spinnerSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        hide(state) {
            state.visible = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(deleteCategory.pending, (state) => {
            state.visible = true;
        });
    },
});

export const { actions, reducer } = spinnerSlice;
