import React from "react";

import useBasketProduct from "../../../hooks/useBasketProduct/useBasketProduct";
import ProductCard from "../../../shared/productCard";
import ProductPrice from "../../../shared/productPrice";
import ButtonCounter from "../../../shared/UI/buttons/buttonCounter";
import { COLORS } from "../../../styles/vars";
import { IModification } from "../../../types/productDetailTypes";
import { Modifications, Wrapper } from "./styles";
import { IBasketItem } from "./types";

const BasketItem: React.FC<IBasketItem> = ({ productInfo, checkedModifications }) => {
    const { slug, name, options, addons } = productInfo;
    const cardColor = COLORS["greenDark"];
    const { product } = useBasketProduct({
        slug,
        productInfo,
        modifications: checkedModifications,
    });

    function renderModification(modificationIds: number[], modification: IModification[]) {
        return modificationIds.map((modId) => {
            const foundOption = modification.find((mod: IModification) => mod.id === modId);

            if (!foundOption) return;

            return <p key={modId}>+ {foundOption.name}</p>;
        });
    }

    return (
        <ProductCard
            title={name}
            clr={cardColor}
            iconType={""}
        >
            <Wrapper>
                <Modifications>
                    {renderModification(checkedModifications.options, options)}
                    {renderModification(checkedModifications.addons, addons)}
                </Modifications>
                <ProductPrice
                    price={product ? product.totalPrice : 0}
                    clr={COLORS["black"]}
                >
                    <ButtonCounter
                        productSlug={slug}
                        modifications={checkedModifications}
                        clr={cardColor}
                    />
                </ProductPrice>
            </Wrapper>
        </ProductCard>
    );
};

export default BasketItem;
