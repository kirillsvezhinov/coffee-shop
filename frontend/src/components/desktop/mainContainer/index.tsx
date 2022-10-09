import React from "react";

import Banner from "../banner";
import Panel from "../panel";
import TextContainer from "../textContainer";
import { Main, MainContainerStyled, Screen, ScreenContainer } from "./styles";
import { IMainContainer } from "./types";

const MainContainer: React.FC<IMainContainer> = ({ children }) => {
    return (
        <MainContainerStyled>
            <Panel />
            <Main>
                <TextContainer />
                <ScreenContainer>
                    <Banner />
                    <Screen id={"screen"}>
                        {children}
                    </Screen>
                </ScreenContainer>
            </Main>
        </MainContainerStyled>  
    );
};

export default MainContainer;