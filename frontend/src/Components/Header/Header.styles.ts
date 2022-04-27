import styled from "styled-components";


export const Header = styled.div`
    background-color: darkblue;
    height: 100px;
    width: 100%;
    flex: 1;
    padding: 0;
    margin-bottom: 50px;
    display: flex;    
    justify-content: space-between;
`;

export const EcommerceName = styled.div`
    color: #FFFF;
    padding-top: 10px;
    margin-left: 15px;

    h2 {
        font-size: 22px
    }
    
`;

export const Menu = styled.div`
    nav ul {
        display: flex;        
        height: 40px;
        list-style: none;
    }

    li {
        margin-left: 10px;
        margin-right: 140px;
        display: flex;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-weight: 400;
        transition: opacity 0.3s;
    }

    a:hover {
        opacity: 0.5;
    }
`;