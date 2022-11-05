import React from "react";

import { Input } from "./styles";
import { IDefaultInput } from "./types";

const DefaultInput: React.FC<IDefaultInput> = ({ 
    value,
    name,
    onChange,
    placeholder 
}) => {
    return (
        <Input
            value={value}
            name={name}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            type="text"
        />
    );
};

export default DefaultInput;
