import styled from "styled-components";

import { COLORS } from "../../../styles/vars";

const DetailInfoStyled = styled.div``;

const Card = styled.div`
    padding: 20px;

    position: relative;
    z-index: 1000;

    background: ${COLORS["white"]};
    border-radius: 15px;
`;

export { Card, DetailInfoStyled };
