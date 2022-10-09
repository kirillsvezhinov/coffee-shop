import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Icon from "../../../shared/icon";
import { COLORS } from "../../../styles/vars";
import { IShop } from "../../../types/shopListTypes";
import { AddressStyled, Map } from "./styles";

const Address = () => {
    const basketShop = useSelector(({ basket }) => basket.shop);
    const shopList = useSelector(({ shops }) => shops.shopList);
    const [shopAddress, setShopAddress] = useState<string>("");

    useEffect(() => {
        if (shopList.length === 0) return;

        const foundShopList = shopList.find((shop: IShop) => shop.slug === basketShop);
        
        if (!foundShopList) return;

        setShopAddress(foundShopList.address);
    }, [shopList]);

    return (
        <AddressStyled>
            <Map>
                <Icon
                    type={"map"}
                    clr={COLORS["blackLight"]}
                />
            </Map>
            <p>{shopAddress}</p>
        </AddressStyled>
    );
};

export default Address;
