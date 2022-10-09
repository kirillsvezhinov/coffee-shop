import styled from "styled-components";

import { COLORS } from "../../../../styles/vars";

const Bottom = styled.div`
    padding: 4px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Count = styled.p`
    color: ${COLORS["yellow"]};
    font-size: 10px;
    font-weight: 800;
`;

const Price = styled.p`
    color: ${COLORS["white"]};
    font-size: 10px;
    font-weight: 600;
`;

export { Bottom, Count, Price };
