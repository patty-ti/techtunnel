import styled from "styled-components";

export const Search = styled.div`
    background-color: #FFFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px; 
    margin: auto;
    margin-top: -80px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    max-width: 999px;
`;

export const SearchArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    width: 800px;
    align-items: center;

    input {
        display: flex;
        width: 300px;
        text-align: center;
        align-items: center;
        border-radius: 6px;
        border-color: #CCCC;
        box-shadow: 1px 0 0 0;
    }

    input: focus {
        box-shadow: 0 0 3px 0;
        outline: none;
        border: 0 none;
        border-color: #CCC;
    }
`;