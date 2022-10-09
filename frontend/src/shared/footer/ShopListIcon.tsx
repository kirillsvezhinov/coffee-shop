import React from "react";
import { useSelector } from "react-redux";

import { COLORS } from "../../styles/vars";
import Icon from "../icon";
import TitleIcon from "../titleIcon";
import { FOOTER_LINK_STYLE } from "./constants";
import { ActiveShopStyled, IconContainer } from "./styles";

const ShopListIcon = () => {
    const activeShop = useSelector(({ shops }) => shops.activeShop);

    return (
        <IconContainer>
            <TitleIcon
                title={"Кофейни"}
                type={"routerLink"}
                href={"/shop-list"}
                clr={COLORS["white"]}
                {...FOOTER_LINK_STYLE}
            >
                <Icon type={"catalog"} />
                {!!activeShop && <ActiveShopStyled type={"activeShop"} />}
            </TitleIcon>
        </IconContainer>
    );
};

export default ShopListIcon;