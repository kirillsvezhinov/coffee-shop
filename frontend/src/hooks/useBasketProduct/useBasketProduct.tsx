import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../store/store";
import {
    addProductToBasket,
    decProductInBasket,
    deleteProductInBasket,
    incProductBasket, updateBasket,
} from "../../store/thunks/thunks";
import { IBasketProduct } from "../../types/basketTypes";
import { IModification } from "../../types/productDetailTypes";
import { IBasketProductInfo, IUseBasketProduct } from "./types";

// Кастомный хук для работы с единицой продукта из корзины
// Функционал:
// 1. добавление и удаление продукта
// 2. подсчет цены продукта: стоимость модификаций, стоимостть продукта с модификациями

function useBasketProduct({
    slug,
    modifications,
    productInfo,
}: IUseBasketProduct): IBasketProductInfo {
    const dispatch = useAppDispatch();
    const activeShop = useSelector(({ shops }) => shops.activeShop);
    const basket = useSelector(({ basket }) => basket);
    const [basketProduct, setBasketProduct] = useState<IBasketProduct | null>(null);
    const [modificationPrice, setModificationPrice] = useState<number>(0);
    const [defaultProductPrice, setDefaultProductPrice] = useState<number>(0);
    
    useEffect(() => {
        const foundProductInBasket = getBasketProduct();

        setBasketProduct(foundProductInBasket ? foundProductInBasket : null);
    }, [basket, modifications]);
    
    useEffect(() => {
        if (!productInfo.price) return;

        setModificationPrice(getModificationsPrice());
    }, [modifications, productInfo.price]);
    
    useEffect(() => {
        if (!productInfo.price) return;

        // считает сумму стоимости продукта + стоимость опций и добавок
        setDefaultProductPrice(productInfo.price + modificationPrice);
    }, [modificationPrice, productInfo.price]);

    // считает стоимость выбранных опций и добавок у продукта
    function getModificationsPrice() {
        const optionsPrice = modifications.options.reduce<number>((acc, id) => {
            const foundPrice = productInfo?.options.find((item: IModification) => item.id === id);

            return acc + (foundPrice ? +foundPrice.price : 0);
        }, 0);

        const addonsPrice = modifications.addons.reduce<number>((acc, id) => {
            const foundPrice = productInfo?.addons.find((item: IModification) => item.id === id);

            return acc + (foundPrice ? +foundPrice.price : 0);
        }, 0);

        return optionsPrice + addonsPrice;
    }
    
    // равен ли текущий магазин магазину в корзине
    function isEqualShops() {
        return basket.shop === activeShop;
    }

    // равен ли текущие слаг продукта аргументу
    function isEqualSlugs(productSlug: string) {
        return productSlug === slug;
    }

    // равены ли модификации текущего продукта аргументу
    function isEqualModifications(productModifications: { options: number[]; addons: number[] }) {
        return JSON.stringify(modifications) === JSON.stringify(productModifications);
    }

    // возвращает товар, если он есть в корзине
    function getBasketProduct() {
        return basket.products.find((product: IBasketProduct) => {
            const productModification = {
                options: product.options,
                addons: product.addons,
            };

            return (
                isEqualSlugs(product.productInfo.slug) 
                && isEqualModifications(productModification)
            );
        });
    }
    
    // генерирует новый продукт
    function getNewProduct() {
        return {
            basketId: basket.id,
            productId: productInfo.id,
            defaultPrice: defaultProductPrice,
            totalPrice: defaultProductPrice,
            options: modifications.options,
            addons: modifications.addons,
            count: 1,
        };
    }
    
    // обновить магазин корзины, удалить все продукты и добавить новый продукт из нового магазина
    function updateBasketShop() {
        dispatch(updateBasket(basket.id, activeShop, getNewProduct()));
    }

    // добавить продукт
    function addProduct() {
        if (!basketProduct) {
            dispatch(addProductToBasket(basket.id, activeShop, getNewProduct()));
        } else {
            dispatch(incProductBasket(basketProduct.id));
        }
    }

    // удалить продукт
    function deleteProduct() {
        if (basketProduct.count - 1 > 0) {
            dispatch(decProductInBasket(basketProduct.id));
        } else {
            dispatch(deleteProductInBasket(basketProduct.id));
        }
    }

    return {
        priceWithModification: defaultProductPrice,
        product: basketProduct,
        addProduct,
        deleteProduct,
        updateBasketShop,
    };
}

export default useBasketProduct;
