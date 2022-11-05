import React from "react";

import { RUB } from "../../../helpers/constants";
import CheckboxDefault from "../../../shared/UI/checkboxes/checkboxDefault";
import { COLORS } from "../../../styles/vars";
import { IModification } from "../../../types/productDetailTypes";
import { Item, List, Price, Section, Title } from "./styles";
import { IModificationSection } from "./types";

const ModificationSection: React.FC<IModificationSection> = ({ title, data, checked, update }) => {
    function isChecked(id: number) {
        return !!checked.find((modificationId: number) => modificationId === id);
    }

    function isDisabled(id: number) {
        const isNoneModificationChecked = !!checked.find(
            (modificationId: number) => modificationId === 1,
        );

        return isNoneModificationChecked && id !== 1;
    }

    function onChangeCheckbox(id: number) {
        let checkedModification = [];

        if (isChecked(id)) {
            const filteredSlugs = checked
                .filter((modificationId: number) => modificationId !== id);
            checkedModification = [...filteredSlugs];
        } else {
            if (id === 1) {
                checkedModification = [1];
            } else {
                checkedModification = [...checked, id];
            }
        }

        update(checkedModification);
    }

    function renderSectionData() {
        return data.map((item: IModification) => {
            const { id, slug, name, price } = item;

            return (
                <Item
                    id={slug}
                    key={`${id}-${slug}`}
                >
                    <CheckboxDefault
                        title={name}
                        name={"modification"}
                        value={id}
                        onChange={() => onChangeCheckbox(id)}
                        isDisabled={isDisabled(id)}
                        isChecked={isChecked(id)}
                        clr={COLORS["red"]}
                    />
                    {!!price && (
                        <Price>
                            {price} {RUB}
                        </Price>
                    )}
                </Item>
            );
        });
    }

    return (
        <Section>
            <Title>{title}</Title>
            <List>{renderSectionData()}</List>
        </Section>
    );
};

export default ModificationSection;
