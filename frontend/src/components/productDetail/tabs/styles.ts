import styled from "styled-components";

import { INFORMATION_STYLE } from "../../../helpers/constants";
import { COLORS } from "../../../styles/vars";
import { ITabs } from "./types";

const { modification, information } = INFORMATION_STYLE;

const Modification = styled.button`
    padding-bottom: 6px;
`;

const Information = styled.button`
    padding-bottom: 6px;
`;

const TabsStyled = styled.div<ITabs>`
    padding: 20px 20px 0;

    position: relative;
    z-index: 100;

    display: flex;
    justify-content: center;
    gap: 36px; 

    border-bottom: 1px solid gray;
  
    ${Modification} {
        color: ${(props) => props.activeMode === "modification" 
                    ? COLORS["white"] 
                    : modification.disabledColor};
      
        border-bottom: 2px solid ${(props) => props.activeMode === "modification" 
                    ? modification.color 
                    : "transparent"};
    }

    ${Information} {
        color: ${(props) =>
            props.activeMode === "information" ? COLORS["white"] : information.disabledColor};

        border-bottom: 2px solid
            ${(props) => (props.activeMode === "information" ? information.color : "transparent")};
    }
`;

export { Information, Modification, TabsStyled };
