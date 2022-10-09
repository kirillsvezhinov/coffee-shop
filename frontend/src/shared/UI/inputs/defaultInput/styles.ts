import styled from "styled-components";

import { COLORS } from "../../../../styles/vars";

const Input = styled.input`
    padding-bottom: 4px;

    background-color: ${COLORS["white"]};
    border: none;
    border-bottom: 2px solid ${COLORS["black"]};
    outline: none;

    &::placeholder {
        color: ${COLORS["gray"]};
        font-size: 14px;
        font-weight: 800;
    }
`;

export { Input };
