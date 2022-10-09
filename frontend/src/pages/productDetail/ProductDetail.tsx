import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Header from "../../components/productDetail/header";
import Info from "../../components/productDetail/info";
import Photo from "../../components/productDetail/photo";
import Footer from "../../shared/footer";
import {
    setActiveCategory,
    setActiveProduct,
    setActiveShop,
} from "../../store/actions/actions";
import { useAppDispatch } from "../../store/store";
import { getProductInfo } from "../../store/thunks/thunks";
import { Container } from "../../styles/global";

const ProductDetail: React.FC = () => {
    const { shop, category, product } = useParams();
    const dispatch = useAppDispatch();
    const productInfo = useSelector(({ productInfo }) => productInfo.product);

    useEffect(() => {
        dispatch(getProductInfo(shop, category, product));
        dispatch(setActiveShop(shop));
        dispatch(setActiveCategory(category));
        dispatch(setActiveProduct(product));
    }, []);

    return (
        <div>
            <Header
                name={productInfo.name}
                size={productInfo.size}
            />
            <Container>
                <Photo photo={productInfo.photo} />
                <Info />
            </Container>
            <Footer />
        </div>
    );
};

export default React.memo(ProductDetail);
