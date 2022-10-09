import React from "react";
import { useSelector } from "react-redux";

import { COLORS } from "../../styles/vars";
import Icon from "../icon";
import TitleIcon from "../titleIcon";
import { FOOTER_LINK_STYLE } from "./constants";

const CatalogIcon = () => {
    const activeShop = useSelector(({ shops }) => shops.activeShop);
    const activeCategory = useSelector(({ catalog }) => catalog.activeCategory);
    
    return (
        <TitleIcon
            title={"Меню"}
            type={"routerLink"}
            href={`/shop-list/${activeShop}/${activeCategory}`}
            clr={COLORS["white"]}
            disabled={activeShop.length === 0}
            {...FOOTER_LINK_STYLE}
        >
            <Icon type={"shopList"} />
        </TitleIcon>
    );
};

export default CatalogIcon;