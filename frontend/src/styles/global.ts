import styled, { createGlobalStyle } from "styled-components";

import { MOBILE_SCREEN_SIZE } from "../helpers/constants";
import { COLORS, SCREEN_SIZES } from "./vars";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${COLORS["gray"]};
      border-radius: 20px;
    }
  }
  
  body {
    height: 100vh;
  }

  a {
    color: ${COLORS["black"]};
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: none;

    cursor: pointer;
  }

  ul {
    list-style: none;
  }
  
  #root {
    height: 100%;
    overflow: hidden;
  }

  .shop-detail-info-enter {
    padding: 0;

    display: none;
    overflow: hidden;
    max-height: 0;
  }

  .shop-detail-info-enter-active {
    padding: 20px 20px 54px;

    display: block;
    max-height: 1000px;
    transition: max-height 1s ease-in;
  }

  .shop-detail-info-enter-done {
    padding: 20px 20px 54px;
  }

  .shop-detail-info-exit {
    padding: 20px 20px 54px;

    max-height: 1000px;
  }

  .shop-detail-info-exit-active {
    padding: 20px 20px 54px;

    display: none;
    overflow: hidden;
    max-height: 0;

    transition: max-height 1s cubic-bezier(0, 1, 0, 1);
  }
`;

const Container = styled.div`
    height: calc(100vh - 66px - 68px);
    overflow: auto;
  
    @media screen and (min-width: ${SCREEN_SIZES["md"]}) {
      height: calc(${MOBILE_SCREEN_SIZE.md.height} - 66px - 68px);
    }
    
    @media screen and (min-width: ${SCREEN_SIZES["xl"]}) {
      height: calc(${MOBILE_SCREEN_SIZE.xl.height} - 66px - 68px);
    }
    
    @media screen and (min-width: ${SCREEN_SIZES["xxl"]}) {
      height: calc(${MOBILE_SCREEN_SIZE.xxl.height} - 66px - 68px);
    }
`;

const SwiperContainer = styled.div`
    overflow: hidden;

    ${".swiper-wrapper"} {
        display: flex;
    }
`;

const SectionBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const TitleText = styled.p`
    color: ${COLORS["gray"]};
    font-size: 12px;
    font-weight: 500;
`;

export { Container, GlobalStyle, SectionBlock, SwiperContainer, TitleText };
