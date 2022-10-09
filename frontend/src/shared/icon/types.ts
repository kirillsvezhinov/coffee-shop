import { ReactElement } from "react";

interface ICatalogIcon extends IIconStyles {
    type: string;
}

interface IIconStyles {
    clr?: string;
    width?: number;
    height?: number;
}

interface IIcons {
    [name: string]: ReactElement;
}

export { ICatalogIcon, IIcons, IIconStyles };
