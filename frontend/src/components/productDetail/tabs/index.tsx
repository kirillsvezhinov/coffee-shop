import React from "react";
import { useSelector } from "react-redux";

import { setActiveMode } from "../../../store/actions/actions";
import { useAppDispatch } from "../../../store/store";
import { TMode } from "../../../types/productDetailTypes";
import { Information, Modification, TabsStyled } from "./styles";

const Tabs: React.FC = () => {
    const dispatch = useAppDispatch();
    const activeMode = useSelector(({ productInfo }) => productInfo.activeMode);

    function handleTabs(tab: TMode) {
        dispatch(setActiveMode(tab));
    }

    return (
        <TabsStyled activeMode={activeMode}>
            <Modification onClick={() => handleTabs("modification")}>Модификации</Modification>
            <Information onClick={() => handleTabs("information")}>Информация</Information>
        </TabsStyled>
    );
};

export default Tabs;
