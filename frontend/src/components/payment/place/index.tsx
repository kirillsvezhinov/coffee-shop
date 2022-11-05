import React, { useState } from "react";

import { BASKET_ORDER_PLACE } from "../../../helpers/constants";
import CheckboxDefault from "../../../shared/UI/checkboxes/checkboxDefault";
import { COLORS } from "../../../styles/vars";
import { PLACE_ID } from "../../../types/orderTypes";
import { PlaceStyled } from "./styles";

const Place: React.FC = () => {
    const [currentPlace, setPlace] = useState(PLACE_ID.toGo); 
    
    function renderCheckboxes() {
        return BASKET_ORDER_PLACE.map((place) => {
            const { id, title } = place;
            const isChecked = currentPlace === id;

            return (
                <CheckboxDefault
                    value={id}
                    title={title}
                    name={"place"}
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
