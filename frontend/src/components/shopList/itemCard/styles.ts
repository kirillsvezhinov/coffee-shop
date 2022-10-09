import styled from "styled-components";

import { COLORS } from "../../../styles/vars";

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 82px;
`;

const Button = styled.button`
    padding: 21px 0;

    z-index: 10000;

    display: flex;
    justify-content: center;
    max-width: 52px;
    width: 100%;
`;

const Card = styled.div`
    padding: 10px 14px 10px 20px;

    position: relative;
    z-index: 1000;

    display: flex;
    justify-content: space-between;
    width: 100%;

    background-color: ${COLORS["white"]};
    border: 2px solid ${COLORS["blackLight"]};
    border-left: none;
    border-radius: 0 0 15px 0;
`;

const CardInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CardName = styled.p`
    color: ${COLORS["blackLight"]};
    font-weight: 800;
    font-size: 18px;
    line-height: 26px;
`;

const CardAddress = styled.p`
    color: ${COLORS["gray"]};
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
`;

const CardTextWrapper = styled.div`
    text-align: right;
`;

const CardText = styled.p`
    color: ${COLORS["blackLight"]};
    font-weight: 800;
    font-size: 9px;
    line-height: 12px;
`;

const RedText = styled(CardText)`
    color: ${COLORS["red"]};
`;

export {
    Button,
    Card,
    CardAddress,
    CardContainer,
    CardInfoWrapper,
    CardName,
    CardText,
    CardTextWrapper,
    RedText,
};
