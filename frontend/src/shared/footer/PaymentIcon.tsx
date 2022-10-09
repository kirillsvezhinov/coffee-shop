import React, { useState } from "react";
import { useSelector } from "react-redux";

import { getBasketTotalPrice, getTotalProductsCount } from "../../store/selectrors/selectors";
import { COLORS } from "../../styles/vars";
import Icon from "../icon";
import TitleIcon from "../titleIcon";
import PaymentPopup from "../UI/popups/paymentPopup";
import { FOOTER_LINK_STYLE } from "./constants";
import { Count, IconContainer, Price, Total } from "./styles";

const PaymentIcon: React.FC = () => {
    const basketProducts = useSelector(({ basket }) => basket.products);
    const basketTotalProductsCount = useSelector(getTotalProductsCount);
    const basketTotalPrice = useSelector(getBasketTotalPrice);
    const [isOpenPayment, setIsOpenPayment] = useState(false);

    function togglePaymentPopup() {
        setIsOpenPayment(!isOpenPayment);
    }
    
    return (
        <IconContainer>
            <TitleIcon
                title={"К оплате"}
                type={"button"}
                click={togglePaymentPopup}
                clr={COLORS["white"]}
                disabled={false}
                {...FOOTER_LINK_STYLE}
            >
                <Icon type={"payment"} />
            </TitleIcon>
            {!!basketProducts.length && (
                <Total>
                    <Count><p>{basketTotalProductsCount}</p></Count>
                    <Price>{basketTotalPrice}</Price>
                </Total>  
            )}
            <PaymentPopup
                togglePopup={togglePaymentPopup}
                isOpened={isOpenPayment}
            />
        </IconContainer>
    );
};

export default PaymentIcon;