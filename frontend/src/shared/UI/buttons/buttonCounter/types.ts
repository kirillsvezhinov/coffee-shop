import { ICheckedModifications } from "../../../../types/productDetailTypes";

interface ICounterStyles {
    padding?: string;
    width?: string;
    bc?: string;
    clr?: string;
    size?: number;
    weight?: number;
}

interface IButtonCounter extends ICounterStyles {
    productSlug: string;
    modifications: ICheckedModifications;
}

export { IButtonCounter, ICounterStyles };
