import styled from "styled-components";

const PhotoStyled = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 100%;
        max-width: 600px;
        height: 350px;
        object-fit: cover;
    }
`;

export { PhotoStyled };
