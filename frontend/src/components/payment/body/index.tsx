import React from "react";
import { useSelector } from "react-redux";

import AccessRights from "../accessRights";
import Address from "../address";
import BasketList from "../basketList";
import Comment from "../comment";
import Place from "../place";
import Ready from "../prepareIn";
import { BodyStyled, Card, Form, Wrapper } from "./styles";

const Body: React.FC = () => {
    const basket = useSelector(({ basket }) => basket);

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        console.log(basket);
    }

    return (
        <BodyStyled>
            {basket.products.length === 0 ? (
                <p>Пусто :(</p>
            ) : (
                <Card>
                    <Address />
                    <Form onSubmit={onSubmit}>
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
