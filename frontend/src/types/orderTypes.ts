type TPlace = "toGo" | "inCoffeeShop";

type TPrepareIn = 5 | 10 | 15 | 20;

interface IOrderInfo {
    date: string;
    time: string;
    place: TPlace;
    prepareIn: TPrepareIn;
    comment: string;
    accessRights: boolean;
}

export { IOrderInfo,TPlace, TPrepareIn };