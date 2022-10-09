import styled from "styled-components";

import { COLORS } from "../../styles/vars";
import Icon from "../icon";

const FooterStyled = styled.div`
    position: relative;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    height: 66px;

    background-color: ${COLORS["black"]};
    border-radius: 15px 15px 0 0;
`;

const IconContainer = styled.div`
  position: relative;
`;

const ActiveShopStyled = styled(Icon)`
  position: absolute;
  top: -8px;
  right: -8px;
`;

const Total = styled.div`
  position: absolute;
  top: -7px;
  left: 35px;
  
  display: flex;
  align-items: center;
  gap: 4px;
  
  background-color: ${COLORS["blackLight"]};
  border-radius: 10px;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
`;

const Count = styled.div`
  padding: 4px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  
  color: ${COLORS["yellowLight"]};
  font-size: 12px;
  font-weight: 800;
  
  background-color: ${COLORS["white"]};
  border-radius: 50%;
`;

const Price = styled.div`
  padding: 4px;
  color: ${COLORS["white"]};
  font-size: 12px;
  font-weight: 500;
`;

export { ActiveShopStyled, Count, FooterStyled, IconContainer, Price,Total };
