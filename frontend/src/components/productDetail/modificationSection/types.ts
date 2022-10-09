import { IModification } from "../../../types/productDetailTypes";

interface IModificationSection {
    title: string;
    data: IModification[];
    checked: number[];
    update: (data: number[]) => void;
}

export { IModificationSection };
