import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { setOpenShops } from "../../../store/actions/actions";
import { useAppDispatch } from "../../../store/store";
import DetailInfo from "../detailInfo/index";
import ItemCard from "../itemCard/index";
import { Background, ItemStyled } from "./styles";
import { IShopItem } from "./types";

const Index: React.FC<IShopItem> = ({ shopData }) => {
    const { slug, name, address, schedule, photos, style, categories } = shopData;

    const dispatch = useAppDispatch();
    const openShops = useSelector(({ shops }) => shops.openShops);
    const [isOpenDetailInfo, setIsOpenDetailInfo] = useState<boolean>(false);

    function toggleShopDetail() {
        const isOpen = openShops.find((shop: string) => shop === slug);

        if (isOpen) {
            const filteredShops = openShops.filter((shop: string) => shop !== slug);
            setIsOpenDetailInfo(false);
            dispatch(setOpenShops(filteredShops));
        } else {
            setIsOpenDetailInfo(true);
            dispatch(setOpenShops([...openShops, slug]));
        }
    }

    return (
        <ItemStyled {...style}>
            <Background />
            <ItemCard
                name={name}
                address={address}
                toggle={toggleShopDetail}
            />
            <CSSTransition
                classNames={"shop-detail-info"}
                in={isOpenDetailInfo}
                timeout={500}
                unmountOnExit
            >
                <DetailInfo
                    color={style.mainColor}
                    slug={slug}
                    schedule={schedule}
                    photos={photos}
                    categories={categories}
                />
            </CSSTransition>
        </ItemStyled>
    );
};

export default Index;
