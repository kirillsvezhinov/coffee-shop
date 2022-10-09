import React from "react";
import { useSelector } from "react-redux";

import { INFORMATION_STYLE } from "../../../helpers/constants";
import Content from "../content";
import Tabs from "../tabs";
import { InfoBc, InfoStyled } from "./styles";

const Info: React.FC = () => {
    const activeMode = useSelector(({ productInfo }) => productInfo.activeMode);

    return (
        <InfoStyled modeStyle={INFORMATION_STYLE[activeMode]}>
            <InfoBc />
            <Tabs />
            <Content />
        </InfoStyled>
    );
};

export default Info;
