import { ReactNode } from "react";

interface IPriceContainer extends IPriceContainerStyled {
    children: ReactNode;
    price: number;
}

interface IPriceContainerStyled {
    clr?: string;
}

export { IPriceContainer, IPriceContainerStyled };
