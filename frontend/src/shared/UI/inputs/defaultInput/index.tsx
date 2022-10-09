import React from "react";

import { Input } from "./styles";
import { IDefaultInput } from "./types";

const DefaultInput: React.FC<IDefaultInput> = ({ value, onChange, placeholder }) => {
    return (
        <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            type="text"
        />
    );
};

export default DefaultInput;
