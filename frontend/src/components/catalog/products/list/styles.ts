import styled from "styled-components";

import { SwiperContainer } from "../../../../styles/global";
import { COLORS } from "../../../../styles/vars";

const SwiperStyled = styled(SwiperContainer)`
    padding: 12px 20px;

    ${".swiper"} {
        display: flex;
        flex-direction: column-reverse;
        gap: 10px;
    }
`;

const SwiperNavigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;

    ${".swiper-button-disabled div"} {
        color: ${COLORS["gray"]};
    }
`;
export { SwiperNavigation, SwiperStyled };
