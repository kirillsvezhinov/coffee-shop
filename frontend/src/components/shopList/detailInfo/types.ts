import { ICategory } from "../../../types/catalogTypes";
import { ISchedule } from "../../../types/shopListTypes";

interface IDetailInfo {
    color: string;
    slug: string;
    schedule: ISchedule;
    photos: string[] | [];
    categories: ICategory[];
}

export { IDetailInfo };
