import styled from "styled-components";

import { SCREEN_SIZES } from "../../../styles/vars";

const PanelStyled = styled.div`
  display: none;
  
  @media screen and (min-width: ${SCREEN_SIZES["md"]}) {
    display: block;
    
    min-width: 80px;
    max-width: 80px;
  }
`;

export { PanelStyled };