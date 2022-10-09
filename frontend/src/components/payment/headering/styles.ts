import styled from "styled-components";

import { COLORS } from "../../../styles/vars";

const HeaderingStyled = styled.div`
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.div`
    font-size: 18px;
    font-weight: 800;
`;

const GreenText = styled.span`
    color: ${COLORS["greenDark"]};
`;

export { GreenText, HeaderingStyled, Title };
