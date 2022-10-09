import { createSelector } from "@reduxjs/toolkit";

import { IBasketProduct } from "../../types/basketTypes";
import { 
    ISelectActiveCategory, 
    ISelectActiveShop, 
    ISelectAllCategories, 
    ISelectBasketProducts, 
    ISelectBasketShop } from "./types";

const selectAllCategories = ({ catalog }: ISelectAllCategories) => catalog.categories;
const selectActiveCategory = ({ catalog }: ISelectActiveCategory) => catalog.activeCategory;
const selectActiveShop = ({ shops }: ISelectActiveShop) => shops.activeShop;
const selectBasketProducts = ({ basket }: ISelectBasketProducts) => basket.products;
const selectBasketShop = ({ basket }: ISelectBasketShop) => basket.shop;

const selectCategoryProducts = createSelector(
    [selectAllCategories, selectActiveCategory],
    (categories, activeCategory) => categories.find((category) => category.slug === activeCategory),
);

const getProductCount = createSelector(
    [selectBasketProducts, selectBasketShop, selectActiveShop, (state, slug) => slug],
    (products, basketShop, activeShop, slug) => {
        return products.reduce((acc, { productInfo, count }: IBasketProduct) => {
            if (productInfo.slug !== slug || basketShop !== activeShop) return acc;

            return acc + count;
        }, 0);
    }
);

const getTotalProductsCount = createSelector(
    [selectBasketProducts],
    (products) => {
        return products.reduce((acc: number, { count }: IBasketProduct) => {
            return acc + count;
        }, 0);
    }
);

const getBasketTotalPrice = createSelector(
    [selectBasketProducts],
    (products) => {
        return products.reduce((acc: number, product: IBasketProduct) => {
            return acc + product.totalPrice;
        }, 0);
    }
);

export { getBasketTotalPrice, getProductCount, getTotalProductsCount, selectCategoryProducts };
