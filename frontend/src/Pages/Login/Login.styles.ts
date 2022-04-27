import styled from "styled-components";

export const Container = styled.div`    
    margin: 0 auto;
    width: 70%;
    height: 100%;
    display: block;      
    padding: 30px; 
    margin-top:50px; 
    background-color: #f0f2f2;
    border-radius: 20px;

    .title {
        align-items: center;        
        font-size: 20px;
        color: #000;
        line-height: 1.2;
        text-align: center;
        margin-top: 50px;
        margin-bottom: 50px;
    }
`;

export const LoginForm = styled.form`    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    padding-bottom: 3rem;

    .wrap-input {
        padding-top: 0.9rem;
    }

    .container-login-form-btn {
        padding-top: 1.2rem;
    }
    
`;

export const CriarConta = styled.div`
    display: flex;    
    align-items: center;
    justify-content: center;
    padding: 0 2rem;

    .cadastrar {
        color: blue;
    }
`;

