import styled from "styled-components";

import { COLORS } from "../../../styles/vars";

const AddressStyled = styled.div`
    padding: 10px 10px 10px 49px;

    position: relative;

    color: ${COLORS["white"]};
    font-size: 14px;
    font-weight: 800;

    background-color: ${COLORS["blackLight"]};
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`;

const Map = styled.div`
    padding: 10px;

    position: absolute;
    top: -2px;
    left: -2px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;

    border: 2px solid ${COLORS["blackLight"]};
    border-radius: 50%;

    background-color: ${COLORS["white"]};
`;

export { AddressStyled, Map };
