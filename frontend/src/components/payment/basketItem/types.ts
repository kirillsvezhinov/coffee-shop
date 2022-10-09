import { IProductDetail } from "../../../types/productDetailTypes";

interface IBasketItem {
    productInfo: IProductDetail;
    checkedModifications: {
        options: number[];
        addons: number[];
    };
}

export { IBasketItem };
