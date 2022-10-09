import React from "react";

import Icon from "../../../../shared/icon";
import { COLORS } from "../../../../styles/vars";
import { IArrow } from "./types";

const arrowColor = (isHover: boolean): string => {
    return isHover ? COLORS["yellow"] : COLORS["blackLight"];
};

const Arrow: React.FC<IArrow> = ({ onMouseOver, onMouseOut, className, isHover, typeIcon }) => {
    return (
        <button
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            className={className}
        >
            <Icon
                clr={arrowColor(isHover)}
                type={typeIcon}
            />
        </button>
    );
};

export default Arrow;
