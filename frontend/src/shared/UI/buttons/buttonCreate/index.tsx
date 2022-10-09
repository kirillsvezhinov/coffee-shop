import React from "react";
import { useSelector } from "react-redux";

import { INFORMATION_STYLE } from "../../../../helpers/constants";
import useBasketProduct from "../../../../hooks/useBasketProduct/useBasketProduct";
import ProductPrice from "../../../productPrice";
import ButtonColored from "../buttonColored";
import ButtonCounter from "../buttonCounter";

const ButtonCreate: React.FC = () => {
    const basket = useSelector(({ basket }) => basket);
    const activeShop = useSelector(({ shops }) => shops.activeShop);
    const activeMode = useSelector(({ productInfo }) => productInfo.activeMode);
    const activeProduct = useSelector(({ productInfo }) => productInfo.activeProduct);
    const productInfo = useSelector(({ productInfo }) => productInfo.product);
    const checkedModifications = useSelector(({ productInfo }) => productInfo.modifications);
    const { product, priceWithModification, addProduct, updateBasketShop } = useBasketProduct({
        slug: activeProduct,
        modifications: checkedModifications,
        productInfo: productInfo,
    });
    const isBasketShopProduct = product && activeShop === basket.shop;
    const styles = {
        padding: "14px 0",
        clr: INFORMATION_STYLE[activeMode].color,
        size: 13,
        width: "155px",
        weight: 800,
    };
    
    function handleCreateProduct() {
        if (basket.id && basket.shop !== activeShop && !!basket.products.length) {
            const continueUpdate = confirm("Все раннее выбранные продукты из другой "
                + "кофейни будут удалены.\nПродолжить?");
            
            if (continueUpdate) updateBasketShop();
        } else {
            addProduct();
        }
    }

    return (
        <ProductPrice price={isBasketShopProduct ? product.totalPrice : priceWithModification}>
            {isBasketShopProduct ? (
                <ButtonCounter
                    modifications={checkedModifications}
                    productSlug={activeProduct}
                    {...styles}
                />
            ) : (
                <ButtonColored
                    click={handleCreateProduct}
                    {...styles}
                >
                    Добавить
                </ButtonColored>
            )}
        </ProductPrice>
    );
};

export default ButtonCreate;
