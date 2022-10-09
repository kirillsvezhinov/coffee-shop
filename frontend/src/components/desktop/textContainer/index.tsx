import React from "react";

import { Info, Subtitle, TextContainerStyled, TextMain, Title } from "./styles";

const TextContainer: React.FC = () => {
    return (
        <TextContainerStyled>
            <TextMain>
                <Title>Coffee Shop</Title>
                <Subtitle>coffee roasters</Subtitle>
            </TextMain>
            <Info>
                Заказ на сайте <span>без очереди</span>
            </Info>
        </TextContainerStyled>
    );
};

export default TextContainer;