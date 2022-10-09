import { IBasket } from "../../types/basketTypes";
import { ICategory } from "../../types/catalogTypes";
import {
    ICheckedModifications,
    IProductDetail,
    TMode
} from "../../types/productDetailTypes";
import { IShop } from "../../types/shopListTypes";

interface IShopState {
    shopList: IShop[];
    openShops: string[];
    activeShop: string;
}

interface ICatalogState {
    categories: ICategory[];
    activeCategory: string;
}

interface IProductState {
    product: IProductDetail | object;
    modifications: ICheckedModifications | object;
    activeProduct: string;
    activeMode: TMode;
}

export { ICatalogState, IProductState, IShopState };
