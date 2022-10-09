import React, { useState } from "react";

import DefaultInput from "../../../shared/UI/inputs/defaultInput";
import { SectionBlock, TitleText } from "../../../styles/global";

const Comment = () => {
    const [comment, setComment] = useState("");

    return (
        <SectionBlock>
            <TitleText>Комментарий</TitleText>
            <DefaultInput
                value={comment}
                onChange={(comment) => setComment(comment)}
                placeholder={"Вселенную в кофе"}
            />
        </SectionBlock>
    );
};

export default Comment;
