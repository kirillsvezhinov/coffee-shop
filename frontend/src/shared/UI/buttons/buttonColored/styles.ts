import styled from "styled-components";

import { COLORS } from "../../../../styles/vars";
import { IButtonStyles } from "./types";

const Button = styled.button<IButtonStyles>`
    padding: ${({ padding }) => padding ?? "12px 30px"};

    position: ${({ position }) => position ?? "relative"};
    left: ${({ left }) => left + "px" ?? "inherit"};
    right: ${({ right }) => right + "px" ?? "inherit"};
    top: ${({ top }) => top + "px" ?? "inherit"};
    bottom: ${({ bottom }) => bottom + "px" ?? "inherit"};
    z-index: 1000;

    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width ?? "auto"};

    color: ${({ clr }) => clr ?? COLORS["white"]};
    font-size: ${({ size }) => size ?? 14}px;
    font-weight: ${({ weight }) => weight ?? 600};

    background-color: ${({ bc }) => bc ?? COLORS["white"]};
    border: 2px solid ${COLORS["blackLight"]};
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`;

export { Button };
