import styled from "styled-components";

import { COLORS } from "../../../../styles/vars";
import { IFakeInput, ILabel } from "./types";

const Label = styled.label<ILabel>`
    position: relative;

    display: flex;
    align-items: center;
    gap: 12px;

    ${({ isDisabled, clr }) =>
        isDisabled
            ? `color: ${COLORS["gray"]}; text-decoration: line-through;`
            : `color: ${clr ?? COLORS["blackLight"]}; text-decoration: none; `}
`;

const Input = styled.input`
    position: absolute;

    width: 20px;
    height: 20px;
    opacity: 0;
`;

const FakeInput = styled.div<IFakeInput>`
    position: relative;

    max-width: 20px;
    min-width: 20px;
    width: 100%;
    height: 20px;

    background-color: ${COLORS["white"]};
    border: 2px solid ${COLORS["blackLight"]};
    border-radius: ${({ type }) => (type === "square" ? "5px" : "50%")};
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
`;

const IconWrapper = styled.div`
    position: absolute;
    top: -1px;
    left: 1px;
`;

export { FakeInput, IconWrapper, Input, Label };
