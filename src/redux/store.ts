import devToolsEnhancer from 'remote-redux-devtools';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducer as snackbarReducer } from './snackbarSlice';
import { reducer as categoryReducer } from './categorySlice';
import { reducer as spinnerReducer } from './spinnerSlice';

export const store = configureStore({
    reducer: {
        snackbar: snackbarReducer,
        category: categoryReducer,
        spinner: spinnerReducer,
    },
    middleware: getDefaultMiddleware(),
    devTools: false,
    enhancers: [devToolsEnhancer({ realtime: true, hostname: 'localhost', port: 8000 })],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
