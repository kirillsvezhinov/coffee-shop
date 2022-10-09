import styled from "styled-components";

import { COLORS } from "../../../styles/vars";

const ContentStyled = styled.div`
    padding: 20px 20px 66px;

    position: relative;
    z-index: 100;

    height: 32vh;
    overflow: auto;
`;

const ContentCard = styled.div`
    padding: 20px;

    background: ${COLORS["white"]};
    border-radius: 15px;
`;

export { ContentCard, ContentStyled };
