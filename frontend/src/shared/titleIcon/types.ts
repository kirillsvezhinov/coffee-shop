import { ReactNode } from "react";

type TComponentType = "button" | "routerLink" | "link";

interface ITitleIcon extends ITitleIconStyles {
    children: ReactNode;
    title: string;
    type?: TComponentType;
    href?: string;
    click?: () => void;
}

interface ITitleIconStyles {
    direction?: string;
    align?: string;
    gap?: number;
    width?: string;
    clr?: string;
    clrIcon?: string;
    size?: number;
    weight?: number;
    disabled?: boolean;
    clrDisabled?: string;
}

export { ITitleIcon, ITitleIconStyles };
