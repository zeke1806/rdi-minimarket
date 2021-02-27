import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducer as snackbarReducer } from './snackbarSlice';
import { reducer as categoryReducer } from './categorySlice';

export const store = configureStore({
    reducer: {
        snackbar: snackbarReducer,
        category: categoryReducer,
    },
    middleware: getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
