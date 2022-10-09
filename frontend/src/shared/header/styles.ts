import styled from "styled-components";

import { IHeaderStyles } from "./types";

const HeaderStyled = styled.div<IHeaderStyles>`
    position: relative;

    padding: 20px;
    width: 100%;
    height: 68px;

    color: ${({ color }) => color};
    font-weight: 800;
    font-size: 18px;
    line-height: 26px;

    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 0 0 15px 15px;
`;

const HeaderIcon = styled.div`
    position: absolute;
    top: 0;
    right: 12px;
`;

export { HeaderIcon, HeaderStyled };
