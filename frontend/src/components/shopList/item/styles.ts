import styled from "styled-components";

import getImageUrl from "../../../helpers/getImageUrl";
import { IShopItemStyle } from "../../../types/shopListTypes";

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
`;

const ItemStyled = styled.div<IShopItemStyle>`
    position: relative;

    height: auto;

    background-color: ${({ secondColor }) => secondColor};
    border-radius: 0 0 13px 0;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.28));

    div${Background} {
        opacity: ${({ transparency }) => transparency};

        background-image: url(${({ bc }) => getImageUrl(bc)});
    }
`;

export { Background, ItemStyled };
