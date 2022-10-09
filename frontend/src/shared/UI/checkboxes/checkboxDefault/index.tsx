import React from "react";

import { COLORS } from "../../../../styles/vars";
import Icon from "../../../icon";
import { FakeInput, IconWrapper, Input, Label } from "./styles";
import { ICheckboxCircle } from "./types";

const CheckboxDefault: React.FC<ICheckboxCircle> = ({
    title,
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
                type="checkbox"
                disabled={isDisabled}
                checked={isChecked}
                onChange={onChange}
            />
            {title}
        </Label>
    );
};

export default CheckboxDefault;
