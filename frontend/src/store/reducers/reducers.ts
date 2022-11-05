import { createReducer } from "@reduxjs/toolkit";

import { IBasket } from "../../types/basketTypes";
import {
    addBasketProduct,
    addOrder,
    deleteBasketProduct,
    setActiveCategory,
    setActiveMode,
    setActiveProduct,
    setActiveShop,
    setBasketId,
    setBasketProducts,
    setBasketShop,
    setCategories,
    setModifications,
    setOpenShops, 
    setOrders,
    setProduct,
    setShopList,
    updateBasketProduct,
} from "../actions/actions";
import { ICatalogState, IOrderState, IProductState, IShopState } from "./types";

const shopState: IShopState = {
    shopList: [],
    openShops: [],
    activeShop: "",
};

const catalogState: ICatalogState = {
    categories: [],
    activeCategory: "breakfast",
};

const productState: IProductState = {
    product: {},
    modifications: {
        options: [1],
        addons: [1],
    },
    activeProduct: "",
    activeMode: "modification",
};

const basketState: IBasket = {
    id: null,
    shop: "",
    products: [],
};

const orderState: IOrderState = {
    orders: [],
};

const shopListReducer = createReducer(shopState, (builder) => {
    builder
        .addCase(setShopList, (state, action) => {
            state.shopList = action.payload;
        })
        .addCase(setOpenShops, (state, action) => {
            state.openShops = action.payload;
        })
        .addCase(setActiveShop, (state, action) => {
            state.activeShop = action.payload;
        });
});

const catalogReducer = createReducer(catalogState, (build) => {
    build
        .addCase(setCategories, (state, action) => {
            state.categories = action.payload;
        })
        .addCase(setActiveCategory, (state, action) => {
            state.activeCategory = action.payload;
        });
});

const productReducer = createReducer(productState, (build) => {
    build
        .addCase(setProduct, (state, action) => {
            state.product = action.payload;
        })
        .addCase(setModifications, (state, action) => {
            state.modifications = action.payload;
        })
        .addCase(setActiveProduct, (state, action) => {
            state.activeProduct = action.payload;
        })
        .addCase(setActiveMode, (state, action) => {
            state.activeMode = action.payload;
        });
});

const basketReducer = createReducer(basketState, (build) => {
    build
        .addCase(setBasketId, (state, action) => {
            state.id = action.payload;
        })
        .addCase(setBasketProducts, (state, action) => {
            state.products = action.payload;
        })
        .addCase(setBasketShop, (state, action) => {
            state.shop = action.payload;
        })
        .addCase(updateBasketProduct, (state, action) => {
            const { id, count, totalPrice } = action.payload;
            const basketProduct = state.products
                .find((basketProduct) => basketProduct.id === id);
            
            basketProduct.count = count;
            basketProduct.totalPrice = totalPrice;
        })
        .addCase(addBasketProduct, (state, action) => {
            state.products.push(action.payload);
        })
        .addCase(deleteBasketProduct, (state, action) => {
            const id = action.payload;
            state.products = state.products
                .filter(basketProduct => basketProduct.id !== id);
        });
});

const orderReducer = createReducer(orderState, (build) => {
    build
        .addCase(setOrders, (state, action) => {
            state.orders = action.payload;
        })
        .addCase(addOrder, (state, action) => {
            state.orders = [...state.orders, action.payload];
        });
});

export { basketReducer, catalogReducer, orderReducer, productReducer, shopListReducer };
