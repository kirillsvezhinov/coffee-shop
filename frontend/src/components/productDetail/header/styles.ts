import styled from "styled-components";

import { IconWrapper } from "../../../shared/icon/styles";
import { COLORS } from "../../../styles/vars";

const HeaderStyled = styled.div`
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    height: 68px;

    color: ${COLORS["blackLight"]};
    font-weight: 800;
`;

const BackWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    font-size: 16px;
`;

const BackButton = styled.button`
    &:hover ${IconWrapper} {
        color: ${COLORS["yellow"]};
    }
`;

const Name = styled.p`
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const Size = styled.p`
    width: max-content;
`;

const FavWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    font-size: 10px;
`;

const FavButton = styled.button`
    &:hover ${IconWrapper} {
        color: ${COLORS["yellow"]};
    }
`;

export { BackButton, BackWrapper, FavButton, FavWrapper, HeaderStyled, IconWrapper, Name, Size };
