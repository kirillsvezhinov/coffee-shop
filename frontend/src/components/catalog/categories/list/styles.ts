import styled from "styled-components";

import { SwiperContainer } from "../../../../styles/global";
import { COLORS } from "../../../../styles/vars";

const SwiperStyled = styled(SwiperContainer)`
    padding: 12px 20px 0 20px;

    border-bottom: 2px solid ${COLORS["gray"]};
`;

export { SwiperStyled };
