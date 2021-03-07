import { createSlice } from '@reduxjs/toolkit';
import { createNewCategory, updateOneCategory } from './categorySlice';

const sliceName = 'snackbar';

interface SnackbarState {
    visible: boolean;
    message?: string;
}

const initialState: SnackbarState = {
    visible: false,
    message: '',
};

const snackbarSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        reset(state) {
            state.visible = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createNewCategory.rejected, (state, action) => {
            state.visible = true;
            state.message = action.error.message;
        });

        builder.addCase(updateOneCategory.rejected, (state, action) => {
            state.visible = true;
            state.message = action.error.message;
        });
        builder.addCase(updateOneCategory.fulfilled, (state) => {
            state.visible = true;
            state.message = 'La category a bien ete modifier';
        });
    },
});

export const { actions, reducer } = snackbarSlice;
