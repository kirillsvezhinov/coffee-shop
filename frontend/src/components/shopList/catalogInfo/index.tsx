import React from "react";

import Icon from "../../../shared/icon/index";
import TitleIcon from "../../../shared/titleIcon/index";
import { Catalog } from "./styles";
import { ICatalogInfo } from "./types";

const styles = {
    direction: "column",
};

const CatalogInfo: React.FC<ICatalogInfo> = ({ color, categories }) => {
    function renderCategories() {
        return categories.map((category) => {
            const { slug, name, mainIcon } = category;

            return (
                <TitleIcon
                    title={name}
                    {...styles}
                    clrIcon={color}
                    key={slug}
                >
                    <Icon type={mainIcon} />
                </TitleIcon>
            );
        });
    }
    return <Catalog>{renderCategories()}</Catalog>;
};

export default CatalogInfo;
