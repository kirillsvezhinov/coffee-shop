import React from "react";

import { ReactComponent as Arrow } from "../../assets/angle_right.svg";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import { ReactComponent as Back } from "../../assets/back.svg";
import { ReactComponent as Breakfast } from "../../assets/breakfast.svg";
import { ReactComponent as Cake } from "../../assets/cake.svg";
import { ReactComponent as HeaderCatalog } from "../../assets/catalog_header.svg";
import { ReactComponent as Check } from "../../assets/check.svg";
import { ReactComponent as ActiveCheck } from "../../assets/check_active.svg";
import { ReactComponent as Clock } from "../../assets/clock.svg";
import { ReactComponent as Bean } from "../../assets/coffee-bean.svg";
import { ReactComponent as Cup } from "../../assets/coffee-cup.svg";
import { ReactComponent as Latte } from "../../assets/coffee-latte.svg";
import { ReactComponent as Decoration } from "../../assets/decoration.svg";
import { ReactComponent as Fav } from "../../assets/fav.svg";
import { ReactComponent as ShopListIcon } from "../../assets/garden.svg";
import { ReactComponent as HeaderMain } from "../../assets/main_icon.svg";
import { ReactComponent as MapIcon } from "../../assets/map-marker.svg";
import { ReactComponent as Sandwich } from "../../assets/sandwich.svg";
import { ReactComponent as TicketIcon } from "../../assets/ticket.svg";
import { IconWrapper } from "./styles";
import { ICatalogIcon, IIcons } from "./types";

const icons: IIcons = {
    shopList: <ShopListIcon />,
    catalog: <MapIcon />,
    map: <MapIcon />,
    activeShop: <ActiveCheck />,
    payment: <TicketIcon />,
    clock: <Clock />,
    "coffee-cup": <Cup />,
    cake: <Cake />,
    "coffee-bean": <Bean />,
    "coffee-latte": <Latte />,
    breakfast: <Breakfast />,
    sandwich: <Sandwich />,
    arrow: <ArrowIcon />,
    "arrow-next": <Arrow />,
    "arrow-prev": <Arrow style={{ transform: "rotate(180deg)" }} />,
    fav: <Fav />,
    back: <Back />,
    down: <Back style={{ transform: "rotate(-90deg)" }} />,
    check: <Check />,
    headerMain: <HeaderMain />,
    headerCatalog: <HeaderCatalog />,
    decoration: <Decoration />,
};

const Icon: React.FC<ICatalogIcon> = ({ type, ...props }) => {
    return <IconWrapper {...props}>{icons[type]}</IconWrapper>;
};

export default Icon;
