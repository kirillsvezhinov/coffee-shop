import { IProductDetail } from "./productDetailTypes";

enum PLACE_ID {
    "toGo" = 1,
    "inCoffeeShop"= 2
}

enum READY_ID {
    "5min" = 5,
    "10min" = 10,
    "15min" = 15,
    "20min" = 20
}

type TPlace = PLACE_ID.toGo | PLACE_ID.inCoffeeShop;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type TPrepareIn = READY_ID["5min"] | READY_ID["10min"] | READY_ID["15min"] | READY_ID["20min"];

interface IOrder {
    id: number;
    shop: string;
    products: IOrderProduct[];
    date: string;
    time: string;
    place: TPlace;
    prepareIn: TPrepareIn;
    comment: string;
    accessRights: boolean;
}

interface IOrderProduct {
    id: number;
    productInfo: IProductDetail;
    options: number[];
    addons: number[];
    count: number;
    defaultPrice: number;
    totalPrice: number;
}

interface IOrderProductPOST {
    productId: number;
    options: number[];
    addons: number[];
    count: number;
    defaultPrice: number;
    totalPrice: number;
}

export { IOrder, IOrderProduct, IOrderProductPOST, PLACE_ID, READY_ID,TPlace, TPrepareIn };