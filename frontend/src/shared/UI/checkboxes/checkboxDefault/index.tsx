import React from "react";

import Icon from "../../../icon";
import { FakeInput, IconWrapper, Input, Label } from "./styles";
import { ICheckboxCircle } from "./types";

const CheckboxDefault: React.FC<ICheckboxCircle> = ({
    value,
    title,
    name,
    type,
    labelClr,
    onChange,
    isDisabled = false,
    isChecked,
    clr,
}) => {
    return (
        <Label
            isDisabled={isDisabled}
            clr={labelClr}
        >
            <FakeInput type={type}>
                {isChecked && (
                    <IconWrapper>
                        <Icon
                            type={"check"}
                            clr={clr}
                        />
                    </IconWrapper>
                )}
            </FakeInput>
            <Input
                name={name}
                type="checkbox"
                disabled={isDisabled}
                checked={isChecked}
                onChange={onChange}
                value={value}
            />
            {title}
        </Label>
    );
};

export default CheckboxDefault;
