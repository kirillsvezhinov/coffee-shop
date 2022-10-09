import React from "react";
import { useSelector } from "react-redux";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import useHover from "../../../../hooks/useHover/useHover";
import { selectCategoryProducts } from "../../../../store/selectrors/selectors";
import { IProduct } from "../../../../types/catalogTypes";
import Arrow from "../arrow/Arrow";
import ProductItem from "../item";
import { SwiperNavigation, SwiperStyled } from "./styles";

SwiperCore.use([Navigation]);

const ProductList = () => {
    const category = useSelector(selectCategoryProducts);
    const prevArrow = useHover();
    const nextArrow = useHover();

    function renderProducts() {
        return category?.products.map((product: IProduct) => {
            return (
                <SwiperSlide key={product.slug}>
                    <ProductItem
                        icon={category.secondIcon}
                        product={product}
                    />
                </SwiperSlide>
            );
        });
    }

    return (
        <SwiperStyled>
            <Swiper
                spaceBetween={20}
                navigation={{
                    prevEl: ".swiper-prev",
                    nextEl: ".swiper-next",
                }}
                slidesPerView={"auto"}
            >
                <SwiperNavigation>
                    <Arrow
                        {...prevArrow.eventHandlers}
                        className={"swiper-prev"}
                        isHover={prevArrow.isHover}
                        typeIcon={"arrow-prev"}
                    />
                    <Arrow
                        {...nextArrow.eventHandlers}
                        className={"swiper-next"}
                        isHover={nextArrow.isHover}
                        typeIcon={"arrow-next"}
                    />
                </SwiperNavigation>
                {renderProducts()}
            </Swiper>
        </SwiperStyled>
    );
};

export default ProductList;
