import React from "react";

import Icon from "../icon";
import { HeaderIcon, HeaderStyled } from "./styles";
import { IHeader } from "./types";

const Header: React.FC<IHeader> = ({ title, icon, ...props }) => {
    return (
        <HeaderStyled {...props}>
            {title}
            <HeaderIcon>
                <Icon
                    type={icon}
                    width={56}
                    height={58}
                />
            </HeaderIcon>
        </HeaderStyled>
    );
};

export default Header;
