import React from "react";
import { useSelector } from "react-redux";

import { MODIFICATIONS } from "../../../helpers/constants";
import { setModifications } from "../../../store/actions/actions";
import { useAppDispatch } from "../../../store/store";
import ModificationSection from "../modificationSection";
import { List } from "./styles";

const Modification: React.FC = () => {
    const dispatch = useAppDispatch();
    const productInfo = useSelector(({ productInfo }) => productInfo.product);
    const checkedModifications = useSelector(({ productInfo }) => productInfo.modifications);

    function renderModificationList() {
        return MODIFICATIONS.map((modification) => {
            const { title, type } = modification;
            const data = productInfo[type];
            const checkedData = checkedModifications[type];
            
            if (!(data?.length)) return;

            function update(data: number[]) {
                dispatch(
                    setModifications({
                        ...checkedModifications,
                        [type]: data,
                    }),
                );
            }

            return (
                <ModificationSection
                    title={title}
                    data={data}
                    checked={checkedData}
                    update={update}
                    key={type}
                />
            );
        });
    }

    return <List>{renderModificationList()}</List>;
};

export default React.memo(Modification);
