import styled from "styled-components";

import { COLORS } from "../../../styles/vars";

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Title = styled.p`
    color: ${COLORS["gray"]};
    font-size: 13px;
    font-weight: 600;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Price = styled.p`
    color: ${COLORS["red"]};
    font-size: 13px;
    font-weight: 800;
`;

export { Item, List, Price, Section, Title };
