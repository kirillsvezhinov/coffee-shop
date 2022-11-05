import { IBasket, IBasketProduct } from "../../types/basketTypes";
import { ICategory, IProduct } from "../../types/catalogTypes";
import { IOrder } from "../../types/orderTypes";
import { IShop } from "../../types/shopListTypes";

interface IDispatch {
    type: string;
}

interface IShopDispatch extends IDispatch {
    payload: IShop[];
}

interface ICategoryDispatch extends IDispatch {
    payload: ICategory[];
}

interface IProductDispatch extends IDispatch {
    payload: IProduct | object;
}

interface IBasketDispatch extends IDispatch {
    payload: IBasketProduct[] | string | number;
}

interface IBasketProductDispatch extends IDispatch {
    payload: IBasketProduct | string | number;
}

interface IDeleteProductInBasket extends IDispatch {
    payload: number;
}

interface IOrderDispatch extends IDispatch {
    payload: IOrder | IBasketProduct[];
}

interface IOrdersDispatch extends IDispatch {
    payload: IOrder[];
}

export { 
    IBasketDispatch, 
    IBasketProductDispatch, 
    ICategoryDispatch, 
    IDeleteProductInBasket,
    IOrderDispatch,
    IOrdersDispatch,
    IProductDispatch, 
    IShopDispatch 
};
