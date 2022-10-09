import React from "react";
import { CSSTransition } from "react-transition-group";

import Body from "../../../../components/payment/body";
import Headering from "../../../../components/payment/headering";
import Overlay from "../overlay";
import { Global, UpDownPopupStyled } from "./styles";
import { IUpDownPopup } from "./types";

const PaymentPopup: React.FC<IUpDownPopup> = ({ togglePopup, isOpened }) => {
    return (
        <Overlay
            selector={"#screen"}
            onClose={togglePopup}
            isOpened={isOpened}
        >
            <Global />
            <CSSTransition
                in={isOpened}
                timeout={400}
                classNames="popup"
                unmountOnExit
            >
                <UpDownPopupStyled>
                    <Headering togglePopup={togglePopup} />
                    <Body />
                </UpDownPopupStyled>
            </CSSTransition>
        </Overlay>
    );
};

export default PaymentPopup;
