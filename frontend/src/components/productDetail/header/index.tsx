import React from "react";
import { useNavigate } from "react-router-dom";

import Icon from "../../../shared/icon";
import { BackButton, BackWrapper, FavButton, FavWrapper, HeaderStyled, Name, Size } from "./styles";
import { IHeader } from "./types";

const Header: React.FC<IHeader> = ({ name, size }) => {
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    return (
        <HeaderStyled>
            <BackWrapper>
                <BackButton onClick={handleBack}>
                    <Icon
                        type={"back"}
                        width={32}
                        height={32}
                    />
                </BackButton>
                <Name>{name}</Name>
            </BackWrapper>
            <FavWrapper>
                <Size>{size}</Size>
                <FavButton>
                    <Icon type={"fav"} />
                </FavButton>
            </FavWrapper>
        </HeaderStyled>
    );
};

export default Header;
