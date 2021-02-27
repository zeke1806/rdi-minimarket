import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createNewCategory } from './categorySlice';

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
    },
});

export const { actions, reducer } = snackbarSlice;
