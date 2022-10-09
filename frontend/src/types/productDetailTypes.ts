import { IProduct } from "./catalogTypes";

interface IProductDetail extends IProduct {
    description: string;
    photo: string;
    addons: IModification[];
    options: IModification[];
    nutrition: INutrition[];
}

interface IModification {
    id: number;
    slug: string;
    name: string;
    price: string;
}

interface INutrition {
    id: number;
    slug: string;
    name: string;
    unit: string;
    value: string;
}

interface ICheckedModifications {
    [name: string]: number[];
}

interface IModeStyle {
    color: string;
    disabledColor: string;
    backgroundColor: string;
    bc: string;
    opacity: string;
}

type TMode = "modification" | "information";

export { ICheckedModifications, IModeStyle, IModification, INutrition, IProduct, IProductDetail, TMode };
