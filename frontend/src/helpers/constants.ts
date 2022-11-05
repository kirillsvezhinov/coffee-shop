import { COLORS } from "../styles/vars";
import { PLACE_ID, READY_ID } from "../types/orderTypes";
import { IModeStyle } from "../types/productDetailTypes";

const RUB = "₽";

const MOBILE_SCREEN_SIZE = {
    xxl: {
        width: "460px",
        height: "897px",
    },
    xl: {
        width: "460px",
        height: "789px",
    },
    lg: {
        width: "361px",
        height: "656px",
    },
    md: {
        width: "361px",
        height: "664px",
    }
};

const BASKET_ORDER_PLACE = [
    {
        id: PLACE_ID.toGo,
        title: "С собой",
    },
    {
        id: PLACE_ID.inCoffeeShop,
        title: "В кофейне",
    },
];

const BASKET_PREPARING = [
    {
        id: READY_ID["5min"],
        title: "5 минут",
    },
    {
        id: READY_ID["10min"],
        title: "10 минут",
    },
    {
        id: READY_ID["15min"],
        title: "15 минут",
    },
    {
        id: READY_ID["20min"],
        title: "20 минут",
    },
];

const MODIFICATIONS = [
    {
        title: "Опции",
        type: "options",
    },
    {
        title: "Добавки",
        type: "addons",
    },
];

const HEADER_STYLE = {
    main: {
        color: COLORS["white"],
        backgroundColor: COLORS["black"],
        icon: "headerMain",
    },
    catalog: {
        color: COLORS["white"],
        backgroundColor: COLORS["green"],
        icon: "headerCatalog",
    },
};

const INFORMATION_STYLE: {[mode: string]: IModeStyle} = {
    modification: {
        color: COLORS["red"],
        disabledColor: COLORS["gray"],
        backgroundColor: COLORS["yellowLight"],
        bc: "/icons/hexagons.svg",
        opacity: "22%",
    },
    information: {
        color: COLORS["greenDark"],
        disabledColor: COLORS["black"],
        backgroundColor: COLORS["black"],
        bc: "/icons/diamonds.svg",
        opacity: "6%",
    },
};

export {
    BASKET_ORDER_PLACE,
    BASKET_PREPARING,
    HEADER_STYLE,
    INFORMATION_STYLE,
    MOBILE_SCREEN_SIZE,
    MODIFICATIONS,
    RUB 
};
