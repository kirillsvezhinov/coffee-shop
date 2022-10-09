import React from "react";

import List from "../../components/shopList/list/index";
import { HEADER_STYLE } from "../../helpers/constants";
import Footer from "../../shared/footer/index";
import Header from "../../shared/header/index";

const ShopList: React.FC = () => {
    return (
        <div>
            <Header
                {...HEADER_STYLE["main"]}
                title={"Выберите кофейню"}
            />
            <List />
            <Footer />
        </div>
    );
};

export default ShopList;
