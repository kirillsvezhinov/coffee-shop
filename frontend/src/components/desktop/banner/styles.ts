import styled from "styled-components";

import { COLORS, SCREEN_SIZES } from "../../../styles/vars";

const BannerStyled = styled.div`
  p {
    display: none;
  }
  
  @media screen and (min-width: ${SCREEN_SIZES["md"]}) {
    position: absolute;
    left: -100px;

    width: 600px;
    height: 512px;

    color: ${COLORS["white"]};
    font-size: 32px;
    font-weight: 500;
    text-transform: uppercase;

    background-color: ${COLORS["black"]};
    border-radius: 20px 0 0 20px;

    p {
      position: absolute;
      top: 120px;
      left: -40px;
      
      display: block;

      transform: rotate(-90deg);
    }
  }
`;

export { BannerStyled };