import styled from "styled-components";

import { TitleText } from "../../../styles/global";
import { COLORS } from "../../../styles/vars";

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TitleTextRed = styled(TitleText)`
    color: ${COLORS["red"]};
`;

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;

export { List, TitleTextRed, Top };
