import React from "react";
import { useSelector } from "react-redux";

import { RUB } from "../../../helpers/constants";
import Icon from "../../../shared/icon";
import { getBasketTotalPrice } from "../../../store/selectrors/selectors";
import { GreenText, HeaderingStyled, Title } from "./styles";
import { IHeadering } from "./types";

const Headering: React.FC<IHeadering> = ({ togglePopup }) => {
    const basketProducts = useSelector(({ basket }) => basket.products);
    const basketTotalPrice = useSelector(getBasketTotalPrice);

    return (
        <HeaderingStyled>
            <Title>
                {!!basketProducts.length && (
                    <>
                        Итого:
                        <GreenText>
                            {basketTotalPrice} {RUB}
                        </GreenText>
                    </>
                )}
            </Title>
            <button onClick={togglePopup}>
                <Icon
                    type={"down"}
                    width={30}
                    height={30}
                />
            </button>
        </HeaderingStyled>
    );
};

export default Headering;
