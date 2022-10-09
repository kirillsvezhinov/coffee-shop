import styled from "styled-components";

import { COLORS } from "../../styles/vars";
import { IPriceContainerStyled } from "./types";

const Wrapper = styled.div<IPriceContainerStyled>`
    display: flex;
    align-items: center;

    background: ${({ clr }) => clr ?? COLORS["blackLight"]};
    border-radius: 5px;
`;

const Price = styled.p`
    padding: 0 14px;

    color: ${COLORS["white"]};
    font-size: 12px;
    font-weight: 600;
`;

export { Price, Wrapper };
