import { createAction } from "@reduxjs/toolkit";

import { IBasketProduct } from "../../types/basketTypes";
import { ICategory } from "../../types/catalogTypes";
import { IProductDetail, TMode } from "../../types/productDetailTypes";
import { IShop } from "../../types/shopListTypes";
import constants from "../constants";

const {
    SET_SHOP_LIST,
    SET_ACTIVE_SHOP,
    SET_OPEN_SHOPS,
    SET_CATEGORIES,
    SET_ACTIVE_CATEGORY,
    SET_ACTIVE_PRODUCT,
    SET_PRODUCT,
    SET_ACTIVE_MODE,
    SET_BASKET_PRODUCTS,
    SET_BASKET_SHOP,
    SET_MODIFICATIONS,
    SET_BASKET_ID,
    UPDATE_BASKET_PRODUCT,
    DELETE_BASKET_PRODUCT,
    ADD_BASKET_PRODUCT,
} = constants;

export const setShopList = createAction<IShop[]>(SET_SHOP_LIST);
export const setOpenShops = createAction<string[]>(SET_OPEN_SHOPS);
export const setActiveShop = createAction<string>(SET_ACTIVE_SHOP);

export const setCategories = createAction<ICategory[]>(SET_CATEGORIES);
export const setActiveCategory = createAction<string>(SET_ACTIVE_CATEGORY);

export const setProduct = createAction<IProductDetail | object>(SET_PRODUCT);
export const setModifications = createAction<object>(SET_MODIFICATIONS);
export const setActiveProduct = createAction<string>(SET_ACTIVE_PRODUCT);
export const setActiveMode = createAction<TMode>(SET_ACTIVE_MODE);

export const setBasketId = createAction<number>(SET_BASKET_ID);
export const setBasketShop = createAction<string>(SET_BASKET_SHOP);
export const setBasketProducts = createAction<IBasketProduct[]>(SET_BASKET_PRODUCTS);
export const updateBasketProduct = createAction<IBasketProduct>(UPDATE_BASKET_PRODUCT);
export const addBasketProduct = createAction<IBasketProduct>(ADD_BASKET_PRODUCT);
export const deleteBasketProduct = createAction<number>(DELETE_BASKET_PRODUCT);