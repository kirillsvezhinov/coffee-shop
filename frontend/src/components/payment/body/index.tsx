import React, { useRef } from "react";
import { useSelector } from "react-redux";

import getFormDataObj from "../../../helpers/getFormDataObj";
import { useAppDispatch } from "../../../store/store";
import { sendOrder } from "../../../store/thunks/thunks";
import { IOrderProduct, IOrderProductPOST } from "../../../types/orderTypes";
import AccessRights from "../accessRights";
import Address from "../address";
import BasketList from "../basketList";
import Comment from "../comment";
import Place from "../place";
import Ready from "../prepareIn";
import { BodyStyled, Card, Form, Wrapper } from "./styles";

const Body: React.FC = () => {
    const dispatch = useAppDispatch();
    const basket = useSelector(({ basket }) => basket);
    const formRef = useRef<HTMLFormElement>(null);

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        const formData = new FormData(formRef.current);
        const { place, ready, comment } = getFormDataObj(formData);
        const formmatedBasketProducts = basket.products
            .reduce((acc: IOrderProductPOST[], product: IOrderProduct) => {
                const currentProduct = { 
                    ...product,
                    productId: product.productInfo.id
                };
                delete currentProduct.productInfo;
                delete currentProduct.id;
            
                return [...acc, currentProduct];
            }, []);
        
        dispatch(sendOrder({
            ...basket,
            place: +place,
            ready: +ready,
            comment,
            products: formmatedBasketProducts
        }));
    }

    return (
        <BodyStyled>
            {basket.products.length === 0 ? (
                <p>Пусто :(</p>
            ) : (
                <Card>
                    <Address />
                    <Form ref={formRef} onSubmit={onSubmit}>
                        <Wrapper>
                            <Place />
                            <Ready />
                            <BasketList />
                            <Comment />
                        </Wrapper>
                        <AccessRights />
                    </Form>
                </Card>
            )}
        </BodyStyled>
    );
};

export default React.memo(Body);
