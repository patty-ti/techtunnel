import Header from '../../../Components/Header/Header';
import * as S from './FinalPedidosStep1.styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const FinalPedidosStep1 = () => {    
    return(
        <S.Container> 
            <Header />            
            <h1 className="title">Finalizar Pedido!</h1>  
            <Button>
            <Link to="/finalizarpedidostep2"> Continuar </Link>
            </Button>          
        </S.Container>
    );
};

export default FinalPedidosStep1;