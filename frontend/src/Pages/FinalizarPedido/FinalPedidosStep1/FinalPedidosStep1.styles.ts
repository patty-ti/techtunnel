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

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #9ab2c8;
`;

export const Button = styled.button`            
    border-radius: 5px 5px;
    background-color: #9ab2c8;
    margin-top: 20px;
    margin-bottom: 20px;  
    text-decoration: none;      
`;

export const Wrapper = styled.aside`
    font-family: Arial, Helvetica, sans-serif;    
    width: 500px;
    padding: 15px;    

    button {
        border-radius: 20px 20px;
        background-color: #bdb6c2;
        margin-bottom: 20px;
        text-decoration: none;
    }
`;