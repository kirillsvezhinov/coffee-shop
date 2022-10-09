import styled from "styled-components";

import { SwiperContainer } from "../../../styles/global";

const SwiperStyled = styled(SwiperContainer)`
    margin: 0 -20px;

    ${".swiper-wrapper"} {
        padding-left: 20px;
    }
`;

export { SwiperStyled };
