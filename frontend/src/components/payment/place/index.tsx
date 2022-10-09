import React, { useState } from "react";

import { BASKET_ORDER_PLACE } from "../../../helpers/constants";
import CheckboxDefault from "../../../shared/UI/checkboxes/checkboxDefault";
import { COLORS } from "../../../styles/vars";
import { PlaceStyled } from "./styles";

const Place: React.FC = () => {
    const [currentPlace, setPlace] = useState("toGo"); 
    
    function renderCheckboxes() {
        return BASKET_ORDER_PLACE.map((place) => {
            const { id, title } = place;
            const isChecked = currentPlace === id;

            return (
                <CheckboxDefault
                    title={title}
                    onChange={() => setPlace(id)}
                    isChecked={isChecked}
                    clr={COLORS["greenDark"]}
                    key={id}
                />
            );
        });
    }

    return <PlaceStyled>{renderCheckboxes()}</PlaceStyled>;
};

export default Place;
