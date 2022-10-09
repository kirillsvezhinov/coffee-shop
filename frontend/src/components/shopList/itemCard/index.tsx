import React from "react";

import Icon from "../../../shared/icon";
import {
    Button,
    Card,
    CardAddress,
    CardContainer,
    CardInfoWrapper,
    CardName,
    CardText,
    CardTextWrapper,
    RedText,
} from "./styles";
import { IItemCard } from "./types";

const ItemCard: React.FC<IItemCard> = ({ name, address, toggle }) => {
    return (
        <CardContainer>
            <Card>
                <CardInfoWrapper>
                    <CardName>{name}</CardName>
                    <CardAddress>{address}</CardAddress>
                </CardInfoWrapper>
                <CardTextWrapper>
                    <CardText>Закрыто до:</CardText>
                    <RedText>08:00</RedText>
                </CardTextWrapper>
            </Card>
            <Button
                onClick={toggle}
                type={"button"}
            >
                <Icon type={"arrow"} />
            </Button>
        </CardContainer>
    );
};

export default ItemCard;
