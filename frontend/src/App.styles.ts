import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';

export const Container = styled.div`
    margin: 0;
    width: 100%;
`;

export const Wrapper = styled.div`
    margin: auto;    
    max-width: 999px;
    margin-bottom: 50px;
`;

export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
    color: #fff;
`;