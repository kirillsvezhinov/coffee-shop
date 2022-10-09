import React from "react";
import { useSelector } from "react-redux";

import useBasketProduct from "../../../../hooks/useBasketProduct/useBasketProduct";
import { Counter } from "./styles";
import { IButtonCounter } from "./types";

const ButtonCounter: React.FC<IButtonCounter> = ({ productSlug, modifications, ...props }) => {
    const productInfo = useSelector(({ productInfo }) => productInfo.product);
    const { product, addProduct, deleteProduct } = useBasketProduct({
        slug: productSlug,
        modifications,
        productInfo,
    });

    return (
        <Counter {...props}>
            <button
                onClick={deleteProduct}
                type={"button"}
            >
                -
            </button>
            <div>{product?.count}</div>
            <button
                onClick={addProduct}
                type={"button"}
            >
                +
            </button>
        </Counter>
    );
};

export default ButtonCounter;
