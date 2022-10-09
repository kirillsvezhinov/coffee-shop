import styled from "styled-components";

import { COLORS } from "../../../../styles/vars";
import { IFakeInput, IInput } from "./types";

const FakeInput = styled.div<IFakeInput>`
    padding: 6px 12px;

    width: max-content;

    background: ${({ isChecked, clr }) => (isChecked ? clr : COLORS["white"])};

    border: 2px solid ${COLORS["blackLight"]};
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    cursor: pointer;
`;

const Input = styled.input`
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;
    opacity: 0;
`;

const Label = styled.label<IInput>`
    position: relative;

    width: max-content;
  
    color: ${({ isChecked }) => isChecked ? COLORS["white"] : COLORS["blackLight"]};
`;

export { FakeInput, Input, Label };
