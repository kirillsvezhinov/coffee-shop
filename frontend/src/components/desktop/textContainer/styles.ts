import styled from "styled-components";

import { COLORS, SCREEN_SIZES } from "../../../styles/vars";

const TextContainerStyled = styled.div`
  display: none;
  
  @media screen and (min-width: ${SCREEN_SIZES["lg"]}) {
    padding: 120px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    text-transform: uppercase; 
  }
`;

const TextMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.p`
  color: ${COLORS["blackLight"]};
  font-size: 120px;
  font-weight: 800;
  line-height: 100px;
`;

const Subtitle = styled.p`
  color: ${COLORS["grayLight"]};
  font-size: 18px;
  font-weight: 500;
`;

const Info = styled.p`
  color: ${COLORS["blackLight"]};
  font-size: 56px;
  font-weight: 700;
  
  span {
    display: block;
    
    color: ${COLORS["pink"]};
  }
`;

export { Info, Subtitle, TextContainerStyled,TextMain, Title };