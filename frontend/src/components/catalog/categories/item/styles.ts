import styled from "styled-components";

import { COLORS } from "../../../../styles/vars";
import { ICategoryItemStyled } from "./types";

const CategoryItemStyled = styled.div<ICategoryItemStyled>`
    padding-bottom: 8px;

    border-bottom: 2px solid ${({ isActive }) => (isActive ? COLORS["orange"] : "transparent")};
`;

export { CategoryItemStyled };
