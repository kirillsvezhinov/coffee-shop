import React from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../store/store";
import { deleteAllBasketProducts } from "../../../store/thunks/thunks";
import { SectionBlock, TitleText } from "../../../styles/global";
import { IBasketProduct } from "../../../types/basketTypes";
import BasketItem from "../basketItem";
import { List, TitleTextRed, Top } from "./styles";

const BasketList: React.FC = () => {
    const dispatch = useAppDispatch();
    const basketId = useSelector(({ basket }) => basket.id);
    const basketProducts = useSelector(({ basket }) => basket.products);
    
    function renderBasketList() {
        return basketProducts.map((product: IBasketProduct, index: number) => {
            const { productInfo, options, addons } = product;
            const checkedModifications = {
                options,
                addons,
            };

            return (
                <BasketItem
                    productInfo={productInfo}
                    checkedModifications={checkedModifications}
                    key={`${productInfo.slug}-${index}`}
                />
            );
        });
    }

    return (
        <SectionBlock>
            <Top>
                <TitleText>Выбрано</TitleText>
                <button onClick={() => dispatch(deleteAllBasketProducts(basketId))} type={"button"}>
                    <TitleTextRed>Убрать всё</TitleTextRed>
                </button>
            </Top>
            <List>{renderBasketList()}</List>
        </SectionBlock>
    );
};

export default BasketList;
