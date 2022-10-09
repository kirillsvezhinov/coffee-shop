import styled from "styled-components";

import { COLORS } from "../../../styles/vars";

const Wrapper = styled.div`
    padding: 4px 10px;
`;

const Modifications = styled.div`
    margin-bottom: 8px;

    display: flex;
    flex-direction: column;
    gap: 6px;

    color: ${COLORS["white"]};
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
`;

export { Modifications, Wrapper };
