import React from "react";
import { useSelector } from "react-redux";

import { INutrition } from "../../../types/productDetailTypes";
import {
    Description,
    InformationStyled,
    Nutrition,
    NutritionItem,
    NutritionName,
    NutritionValue,
} from "./styles";

const Information = () => {
    const productInfo = useSelector(({ productInfo }) => productInfo.product);
    const { description, nutrition } = productInfo;

    function renderNutrition() {
        return nutrition.map((item: INutrition) => {
            console.log(item.slug);
            return (
                <NutritionItem key={item.slug}>
                    <NutritionName>
                        {item.name}, {item.unit}
                    </NutritionName>
                    <NutritionValue>{item.value}</NutritionValue>
                </NutritionItem>
            );
        });
    }

    return (
        <InformationStyled>
            <Description>{description}</Description>
            <Nutrition>{nutrition && renderNutrition()}</Nutrition>
        </InformationStyled>
    );
};

export default Information;
