import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import { ICategory } from "../../../../types/catalogTypes";
import CategoryItem from "../item/index";
import { SwiperStyled } from "./styles";

const CategoryList: React.FC = () => {
    const categories = useSelector(({ catalog }) => catalog.categories);

    function renderCategories() {
        return categories.map((category: ICategory) => {
            return (
                <SwiperSlide key={category.slug}>
                    <CategoryItem category={category} />
                </SwiperSlide>
            );
        });
    }

    return (
        <SwiperStyled>
            <Swiper
                spaceBetween={20}
                slidesPerView={"auto"}
            >
                {renderCategories()}
            </Swiper>
        </SwiperStyled>
    );
};

export default CategoryList;
