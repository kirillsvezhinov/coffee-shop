import styled from "styled-components";

import { MOBILE_SCREEN_SIZE } from "../../../helpers/constants";
import { COLORS, SCREEN_SIZES } from "../../../styles/vars";

const MainContainerStyled = styled.div`
  height: 100%;
  
  @media screen and (min-width: ${SCREEN_SIZES["md"]}) {
    display: flex;

    background-color: ${COLORS["black"]};
  }
`;

const Main = styled.div`
  height: 100%;

  @media screen and (min-width: ${SCREEN_SIZES["md"]}) {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    background-color: ${COLORS["white"]};
    border-radius: 20px 0 0 20px;
  }
`;

const ScreenContainer = styled.div`
  height: 100%;

  @media screen and (min-width: ${SCREEN_SIZES["md"]}) {
    padding: 21px;

    position: relative;

    display: flex;
    align-items: center; 
  }
`;

const Screen = styled.div`
    position: relative;
    
    width: 100%;
    height: 100%;
  
    background-color: ${COLORS["white"]};
  
    @media screen and (min-width: ${SCREEN_SIZES["md"]}) {
      width: ${MOBILE_SCREEN_SIZE.md.width};
      height: ${MOBILE_SCREEN_SIZE.md.height};
      overflow: hidden;

      border: 4px solid ${COLORS["blackLight"]};
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
    }
    
    @media screen and (min-width: ${SCREEN_SIZES["xl"]}) {
      width: ${MOBILE_SCREEN_SIZE.xl.width};
      height: ${MOBILE_SCREEN_SIZE.xl.height};
    }
    
    @media screen and (min-width: ${SCREEN_SIZES["xxl"]}) {
      width: ${MOBILE_SCREEN_SIZE.xxl.width};
      height: ${MOBILE_SCREEN_SIZE.xxl.height};
    }
`;

export { Main, MainContainerStyled, Screen, ScreenContainer };