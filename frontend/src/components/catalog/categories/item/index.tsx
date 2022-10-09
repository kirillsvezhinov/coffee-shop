import React from "react";
import { useSelector } from "react-redux";

import Icon from "../../../../shared/icon/index";
import TitleIcon from "../../../../shared/titleIcon/index";
import { setActiveCategory } from "../../../../store/actions/actions";
import { useAppDispatch } from "../../../../store/store";
import { COLORS } from "../../../../styles/vars";
import { CategoryItemStyled } from "./styles";
import { IItem } from "./types";

const CategoryItem: React.FC<IItem> = ({ category }) => {
    const dispatch = useAppDispatch();
    const { slug, mainIcon, name } = category;
    const activeShop = useSelector(({ shops }) => shops.activeShop);
    const activeCategory = useSelector(({ catalog }) => catalog.activeCategory);
    const isActive = activeCategory === slug;

    function handleCategory() {
        dispatch(setActiveCategory(slug));
    }

    return (
        <CategoryItemStyled isActive={isActive}>
            <TitleIcon
                title={name}
                type={"routerLink"}
                href={`/shop-list/${activeShop}/${slug}`}
                click={handleCategory}
                clr={isActive ? COLORS["black"] : COLORS["gray"]}
                size={13}
                weight={600}
            >
                <Icon type={mainIcon} />
            </TitleIcon>
        </CategoryItemStyled>
    );
};

export default CategoryItem;
