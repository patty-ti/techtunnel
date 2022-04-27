import styled from "styled-components";

export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background-color: #FFFF;
    color: #000000;
    width: 40%;
    height: 80%;
    border-radius: 16px;

    .close {
        background-color: transparent;
        border: none;
        outline: none;
        width: 32px;
        height: 32px;
        top: 16px;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        position: relative;
        align-items: center;
        right: calc(-100% + 50px);
        cursor: pointer;
    }
`;

export const FormLogin = styled.form`

`;