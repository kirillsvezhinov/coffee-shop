import styled from "styled-components";

import { COLORS } from "../../../styles/vars";

const InformationStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const Description = styled.p`
    color: ${COLORS["blackLight"]};
    font-size: 16px;
    font-weight: 500;
`;

const Nutrition = styled.div`
    display: flex;
    gap: 20px;
`;

const NutritionItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    font-weight: 600;
`;

const NutritionName = styled.p`
    color: ${COLORS["grayLight"]};
    font-size: 10px;
    text-transform: uppercase;
`;

const NutritionValue = styled.p`
    color: ${COLORS["black"]};
    font-size: 12px;
`;

export { Description, InformationStyled, Nutrition, NutritionItem, NutritionName, NutritionValue };
