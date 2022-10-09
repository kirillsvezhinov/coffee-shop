import styled, { createGlobalStyle } from "styled-components";

import { COLORS, SCREEN_SIZES } from "../../../../styles/vars";

const Global = createGlobalStyle`
    .popup-enter {
    transform: translateY(100vh);
    }
    
    .popup-enter-active {
    transform: translateY(0);
    transition: 400ms all;
    }
    
    .popup-exit {
    transform: translateY(0);
    }
    
    .popup-exit-active {
    transform: translateY(100vh);
    transition: 400ms all;
    }
`;

const UpDownPopupStyled = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10000;

    height: 90vh;
    overflow: auto;

    background-color: ${COLORS["white"]};
  
    @media screen and (min-width: ${SCREEN_SIZES["md"]}) {
      height: 85%;
    }
`;

export { Global, UpDownPopupStyled };
