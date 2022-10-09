import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RUB } from "../../../../helpers/constants";
import ProductCard from "../../../../shared/productCard";
import { getProductCount } from "../../../../store/selectrors/selectors";
import { 
    ISelectActiveShop, 
    ISelectBasketProducts, 
    ISelectBasketShop
} from "../../../../store/selectrors/types";
import { COLORS } from "../../../../styles/vars";
import { Bottom, Count, Price } from "./styles";
import { IProductItem } from "./types";

const ProductItem: React.FC<IProductItem> = ({ product, icon }) => {
    const { slug, name, price } = product;
    const activeShop = useSelector(({ shops }) => shops.activeShop);
    const activeCategory = useSelector(({ catalog }) => catalog.activeCategory);
    const productCount = useSelector((state: ISelectBasketProducts &
        ISelectBasketShop & ISelectActiveShop) => {
        return getProductCount(state, slug);
    });

    return (
        <Link to={`/shop-list/${activeShop}/${activeCategory}/${slug}`}>
            <ProductCard
                title={name}
                clr={COLORS["yellow"]}
                iconType={icon}
            >
                <Bottom>
                    <Count>x{productCount}</Count>
                    <Price>
                        {price} {RUB}
                    </Price>
                </Bottom>
            </ProductCard>
        </Link>
    );
};

export default ProductItem;
