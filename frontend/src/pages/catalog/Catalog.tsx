import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import CategoryList from "../../components/catalog/categories/list/index";
import ProductList from "../../components/catalog/products/list";
import { HEADER_STYLE } from "../../helpers/constants";
import Footer from "../../shared/footer/index";
import Header from "../../shared/header/index";
import {
    setActiveCategory,
    setActiveProduct,
    setActiveShop,
    setModifications,
    setProduct,
} from "../../store/actions/actions";
import { useAppDispatch } from "../../store/store";
import { getShopCategories } from "../../store/thunks/thunks";
import { Container } from "../../styles/global";

const Catalog: React.FC = () => {
    const { shop, category } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getShopCategories(shop));
        dispatch(setActiveShop(shop));
        dispatch(setActiveCategory(category));
        dispatch(setProduct({}));
        dispatch(setActiveProduct(""));
        dispatch(
            setModifications({
                options: [1],
                addons: [1],
            }),
        );
    }, []);

    return (
        <div>
            <Header
                title={"Что желаете?"}
                {...HEADER_STYLE["catalog"]}
            />
            <Container>
                <CategoryList />
                <ProductList />
            </Container>
            <Footer />
        </div>
    );
};

export default Catalog;
