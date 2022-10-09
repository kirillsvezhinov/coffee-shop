import styled from "styled-components";

import { COLORS } from "../../../styles/vars";

const BodyStyled = styled.div`
    padding-left: 20px;
`;

const Card = styled.div`
    border: 2px solid ${COLORS["blackLight"]};
    border-right: none;
    border-top-left-radius: 20px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Wrapper = styled.div`
    padding: 24px 22px 0 22px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export { BodyStyled, Card, Form, Wrapper };
