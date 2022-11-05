import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { BASKET_PREPARING } from "../../../helpers/constants";
import DefaultRadioButton from "../../../shared/UI/radioButtons/defaultRadioButton";
import { SectionBlock, TitleText } from "../../../styles/global";
import { COLORS } from "../../../styles/vars";
import { READY_ID } from "../../../types/orderTypes";
import { SwiperStyled } from "./styles";

const Ready: React.FC = () => {
    const [currentPrepareIn, setPrepareIn] = useState(READY_ID["5min"]);

    function renderRadioButtons() {
        return BASKET_PREPARING.map((prepareIn) => {
            const { id, title } = prepareIn;
            const isChecked = currentPrepareIn === id;

            return (
                <SwiperSlide key={id}>
                    <DefaultRadioButton
                        title={title}
                        name={"ready"}
                        value={id}
                        clr={COLORS["greenDark"]}
                        isChecked={isChecked}
                        onChange={() => setPrepareIn(id)}
                    />
                </SwiperSlide>
            );
        });
    }

    return (
        <SectionBlock>
            <TitleText>Приготовить заказ через</TitleText>
            <SwiperStyled>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={"auto"}
                >
                    {renderRadioButtons()}
                </Swiper>
            </SwiperStyled>
        </SectionBlock>
    );
};

export default Ready;
