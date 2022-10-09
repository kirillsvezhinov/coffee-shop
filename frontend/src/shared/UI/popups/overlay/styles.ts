import styled from "styled-components";

import { IOverlayBc } from "./types";

const Wrapper = styled.div`
    .win-enter {
        transform: translateY(100vh);
    }

    .win-enter-active {
        transform: translateY(0);
        transition: 400ms all;
    }

    .win-exit {
        transform: translateY(0);
    }

    .win-exit-active {
        transform: translateY(100vh);
        transition: 400ms all;
    }
`;

const OverlayStyled = styled.div``;

const OverlayBc = styled.div<IOverlayBc>`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1000;

    display: ${({ isActive }) => (isActive ? "block" : "none")};

    background: rgba(27, 30, 27, 0.4);

    cursor: pointer;
`;

export { OverlayBc, OverlayStyled, Wrapper };
