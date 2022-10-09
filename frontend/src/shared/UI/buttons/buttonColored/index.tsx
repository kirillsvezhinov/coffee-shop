import React from "react";

import { Button } from "./styles";
import { IButtonColored } from "./types";

const ButtonColored: React.FC<IButtonColored> = ({ children, click, ...props }) => {
    return (
        <Button
            onClick={click}
            {...props}
        >
            {children}
        </Button>
    );
};

export default ButtonColored;
