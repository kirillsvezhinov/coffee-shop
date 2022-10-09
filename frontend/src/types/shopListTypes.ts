import { ICategory } from "./catalogTypes";

interface IShop {
    id: string;
    slug: string;
    name: string;
    address: string;
    schedule?: ISchedule;
    photos?: string[] | [];
    style: IShopItemStyle;
    categories: ICategory[];
}

interface ISchedule {
    weekdays: IScheduleItem;
    weekends: IScheduleItem;
}

interface IScheduleItem {
    start: string;
    end: string;
}

interface IShopItemStyle {
    mainColor: string;
    secondColor: string;
    transparency: string;
    bc: string;
}

export { ISchedule, IScheduleItem, IShop, IShopItemStyle };
