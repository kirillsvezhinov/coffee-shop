import React, { useState } from "react";

import CheckboxDefault from "../../../shared/UI/checkboxes/checkboxDefault";
import { COLORS } from "../../../styles/vars";
import { AccessRightsStyled, SubmitButton } from "./styles";

const AccessRights: React.FC = () => {
    const [currentAccessRights, setAccessRights] = useState(false);

    return (
        <AccessRightsStyled>
            <CheckboxDefault
                title={"Согласен с правилами оплаты"}
                type={"square"}
                onChange={() => setAccessRights(!currentAccessRights)}
                isChecked={currentAccessRights}
                labelClr={COLORS["white"]}
                clr={COLORS["greenDark"]}
            />
            <SubmitButton
                disabled={!currentAccessRights}
                type={"submit"}
            >
                Отправить
            </SubmitButton>
        </AccessRightsStyled>
    );
};

export default AccessRights;
