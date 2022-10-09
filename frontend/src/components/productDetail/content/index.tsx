import React from "react";
import { useSelector } from "react-redux";

import Information from "../information";
import Modification from "../modification";
import { ContentCard, ContentStyled } from "./styles";

const Content: React.FC = () => {
    const activeMode = useSelector(({ productInfo }) => productInfo.activeMode);

    return (
        <ContentStyled>
            <ContentCard>
                {activeMode === "modification" ? <Modification /> : <Information />}
            </ContentCard>
        </ContentStyled>
    );
};

export default React.memo(Content);
