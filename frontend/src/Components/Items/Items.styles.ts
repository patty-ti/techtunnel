import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    border: 1.5px solid lightgray;
    border-radius: 20px;
    height: 100%;    

    button {
        border-radius: 20px 20px;
        background-color: #bdb6c2;
        margin-bottom: 20px;
    }

    img {
        max-height: 200px;
        max-width: 200px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div {
        padding: 10px;
        height: 100%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
    }
`;