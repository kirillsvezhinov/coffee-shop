import React from "react";

import { FakeInput, Input, Label } from "./styles";
import { IDefaultReadioButton } from "./types";

const DefaultRadioButton: React.FC<IDefaultReadioButton> = ({
    title,
    value,
    name,
    onChange,
    isChecked,
    isDisabled = false,
    clr,
}) => {
    return (
        
        <Label isChecked={isChecked}>
            <FakeInput
                isChecked={isChecked}
                isDisabled={isDisabled}
                clr={clr}
            >
                {title}
            </FakeInput>
            <Input
                type="radio"
                name={name}
                value={value}
                disabled={isDisabled}
                checked={isChecked}
                onChange={onChange}
            />
        </Label>
    );
};

export default DefaultRadioButton;
