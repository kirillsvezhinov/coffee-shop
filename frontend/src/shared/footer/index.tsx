import React from "react";
import { useSelector } from "react-redux";

import ButtonCreate from "../UI/buttons/buttonCreate";
import CatalogIcon from "./CatalogIcon";
import PaymentIcon from "./PaymentIcon";
import ShopListIcon from "./ShopListIcon";
import { FooterStyled } from "./styles";

const Footer: React.FC = () => {
    const activeProduct = useSelector(({ productInfo }) => productInfo.activeProduct);

    return (
        <FooterStyled>
            {!activeProduct ? (
                <>
                    <CatalogIcon />
                    <ShopListIcon />
                </>
            ) : (
                <ButtonCreate />
            )}
            <PaymentIcon />
        </FooterStyled>
    );
};

export default Footer;
