import styled from "styled-components";

import getImageUrl from "../../../helpers/getImageUrl";
import { SCREEN_SIZES } from "../../../styles/vars";
import { IInfoStyled } from "./types";

const InfoBc = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: 100%;
`;

const InfoStyled = styled.div<IInfoStyled>`
    position: absolute;
    bottom: 56px;

    width: 100%;
    height: 45vh;

    background-color: ${({ modeStyle }) => modeStyle.backgroundColor};
    border-radius: 15px 15px 0 0;

    ${InfoBc} {
        opacity: ${({ modeStyle }) => modeStyle.opacity};

        background-image: url(${({ modeStyle }) => getImageUrl(modeStyle.bc)});
    }

    @media screen and (min-width: ${SCREEN_SIZES["md"]}) {
      height: 40%;
    }

    @media screen and (min-width: ${SCREEN_SIZES["xl"]}) {
      height: 45%;
    }
`;

export { InfoBc, InfoStyled };
