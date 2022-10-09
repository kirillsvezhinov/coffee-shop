import styled from "styled-components";

import { COLORS } from "../../../styles/vars";

const AccessRightsStyled = styled.div`
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 28px;

    background-color: ${COLORS["blackLight"]};
`;

const SubmitButton = styled.button`
    color: ${COLORS["white"]};
    font-size: 16px;
    font-weight: 800;

    &:disabled {
        opacity: 0.7;
    }
`;

export { AccessRightsStyled, SubmitButton };
