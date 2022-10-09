import styled from "styled-components";

import { COLORS } from "../../styles/vars";
import { IconWrapper } from "../icon/styles";
import { ITitleIconStyles } from "./types";

const Container = styled.div<ITitleIconStyles>`
    a,
    button,
    div {
        display: flex;
        flex-direction: ${({ direction }) => direction ?? "row"};
        align-items: ${({ align }) => align ?? "center"};
        gap: ${({ gap }) => gap ?? 6}px;
        width: ${({ width }) => width ?? "max-content"};

        color: ${({ disabled, clrDisabled, clr }) =>
            disabled
                ? clrDisabled ?? COLORS["gray"]
                : clr ?? COLORS["blackLight"]};
        font-size: ${({ size }) => size ?? 10}px;
        font-weight: ${({ weight }) => weight ?? 800};

        pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

        ${IconWrapper} {
            color: ${({ disabled, clrDisabled, clrIcon, clr }) =>
                disabled
                    ? clrDisabled ?? COLORS["gray"]
                    : clrIcon
                    ? clrIcon
                    : clr ?? COLORS["blackLight"]};
        }
    }
`;

export { Container };
