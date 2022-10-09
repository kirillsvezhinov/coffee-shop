import { IBasketProduct } from "../../types/basketTypes";
import { ICheckedModifications, IProductDetail } from "../../types/productDetailTypes";

interface IBasketProductInfo {
    priceWithModification: number;
    product: IBasketProduct | null;
    addProduct: () => void;
    deleteProduct: () => void;
    updateBasketShop: () => void;
}

interface IUseBasketProduct {
    slug: string;
    modifications: ICheckedModifications;
    productInfo: IProductDetail;
}

export { IBasketProductInfo, IUseBasketProduct };
