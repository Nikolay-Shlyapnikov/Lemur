import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './uiSlice';

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Отключаем проверку на сериализуемость
        }),
    devTools: process.env.NODE_ENV !== 'production'
});

