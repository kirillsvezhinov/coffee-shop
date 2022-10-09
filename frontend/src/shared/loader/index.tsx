import React from "react";

import getImageUrl from "../../helpers/getImageUrl";
import { LoaderStyled } from "./styles";

const Loader: React.FC = () => {
    return (
        <LoaderStyled>
            <img src={`${getImageUrl("/gif/heart.gif")}`} alt="loader" />
        </LoaderStyled>
    );
};

export default Loader;