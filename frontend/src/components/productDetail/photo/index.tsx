import React from "react";

import getImageUrl from "../../../helpers/getImageUrl";
import { PhotoStyled } from "./styles";
import { IPhoto } from "./types";

const Photo: React.FC<IPhoto> = ({ photo }) => {
    return (
        <PhotoStyled>
            <img
                src={getImageUrl(photo)}
                alt="product_photo"
            />
        </PhotoStyled>
    );
};

export default Photo;
