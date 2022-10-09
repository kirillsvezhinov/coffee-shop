import styled from "styled-components";

import { COLORS } from "../../styles/vars";

const ProductCardStyled = styled.div`
    position: relative;

    width: max-content;
    max-width: 200px;

    background: ${COLORS["blackLight"]};
    border-radius: 10px;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
`;

const Top = styled.div`
    padding: 4px 10px;

    display: flex;
    align-items: center;
    gap: 6px;

    background: ${COLORS["white"]};
    border: 2px solid ${COLORS["blackLight"]};
    border-radius: 10px;
`;

export { ProductCardStyled, Top };
