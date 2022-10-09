import styled from "styled-components";

import { IIconStyles } from "./types";

const IconWrapper = styled.div<IIconStyles>`
    max-width: ${({ width }) => width ?? 24}px;
    min-width: ${({ width }) => width ?? 24}px;
    width: 100%;
    height: ${({ height }) => height ?? 24}px;

    color: ${({ clr }) => clr};
`;

export { IconWrapper };
