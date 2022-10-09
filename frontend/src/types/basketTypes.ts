import { IProductDetail } from "./productDetailTypes";

interface IBasket {
    id: number | null;
    shop: string;
    products: IBasketProduct[];
}

interface IBasketProduct {
    id: number;
    productInfo: IProductDetail;
    options: number[];
    addons: number[];
    count: number;
    defaultPrice: number;
    totalPrice: number;
}

interface IBasketProductPOST {
    basketId: number;
    productId: number;
    options: number[];
    addons: number[];
    count: number;
    defaultPrice: number;
    totalPrice: number;
}

export { IBasket , IBasketProduct, IBasketProductPOST };
