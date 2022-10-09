import React from "react";
import { useSelector } from "react-redux";

import { IShop } from "../../../types/shopListTypes";
import ShopListItem from "../item/index";
import { ListStyled } from "./styles";

const List: React.FC = () => {
    const shopList = useSelector(({ shops }) => shops.shopList);

    function renderShopList() {
        return shopList.map((shop: IShop) => {
            return (
                <ShopListItem
                    shopData={shop}
                    key={shop.id}
                />
            );
        });
    }

    return <ListStyled>{renderShopList()}</ListStyled>;
};

export default List;
