import { ReactNode } from "react";

interface IButtonStyles {
    position?: string;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    width?: string;
    bc?: string;
    clr?: string;
    padding?: string;
    size?: number;
    weight?: number;
}

interface IButtonColored extends IButtonStyles {
    children?: ReactNode;
    click: () => void;
}

export { IButtonColored, IButtonStyles };
