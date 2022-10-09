import styled from "styled-components";

import { COLORS } from "../../../../styles/vars";
import { ICounterStyles } from "./types";

const Counter = styled.div<ICounterStyles>`
    padding: ${({ padding }) => padding ?? "12px 30px"};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: ${({ width }) => width ?? "auto"};

    background-color: ${({ bc }) => bc ?? COLORS["white"]};
    border: 2px solid ${COLORS["blackLight"]};
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    div,
    button {
        color: ${({ clr }) => clr ?? COLORS["white"]};
        font-size: ${({ size }) => size ?? 14}px;
        font-weight: ${({ weight }) => weight ?? 600};
    }
`;

export { Counter };
