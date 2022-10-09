import { ICategory } from "../../../../types/catalogTypes";

interface IItem {
    category: ICategory;
}

interface ICategoryItemStyled {
    isActive: boolean;
}

export { ICategoryItemStyled, IItem };
