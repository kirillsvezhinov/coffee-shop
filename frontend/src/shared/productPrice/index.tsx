import React from "react";

import { RUB } from "../../helpers/constants";
import { Price, Wrapper } from "./styles";
import { IPriceContainer } from "./types";

const ProductPrice: React.FC<IPriceContainer> = ({ children, price, clr }) => {
    return (
        <Wrapper clr={clr}>
            {children}
            <Price>
                {price} {RUB}
            </Price>
        </Wrapper>
    );
};

export default ProductPrice;
