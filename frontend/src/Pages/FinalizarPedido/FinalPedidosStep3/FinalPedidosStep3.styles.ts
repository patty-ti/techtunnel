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
`;

export const Title = styled.h1`
    align-items: center;        
    font-size: 20px;
    color: #000;
    line-height: 1.2;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
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