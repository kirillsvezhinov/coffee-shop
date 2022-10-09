import React from "react";

import Icon from "../icon";
import TitleIcon from "../titleIcon";
import { ProductCardStyled, Top } from "./styles";
import { IProductCard } from "./types";

const ProductCard: React.FC<IProductCard> = ({ 
    children, 
    title, 
    clr, 
    iconType
}) => {
    return (
        <ProductCardStyled>
            <Top>
                <TitleIcon
                    title={title}
                    size={13}
                    weight={800}
                    width={"auto"}
                    clrIcon={clr}
                >
                    <Icon type={iconType} />
                </TitleIcon>
            </Top>
            {children}
        </ProductCardStyled>
    );
};

export default ProductCard;
