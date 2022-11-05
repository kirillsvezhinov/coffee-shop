import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import {
    basketReducer,
    catalogReducer, orderReducer,
    productReducer,
    shopListReducer,
} from "./reducers/reducers";

const store = configureStore({
    reducer: {
        shops: shopListReducer,
        catalog: catalogReducer,
        productInfo: productReducer,
        basket: basketReducer,
        order: orderReducer,
    },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
