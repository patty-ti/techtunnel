import Header from '../../../Components/Header/Header';
import * as S from './FinalPedidosStep3.styles';
import { Link } from 'react-router-dom';

const FinalPedidosStep3 = () => {    
    return(
        <S.Container> 
            <Header />            
            <S.Title>Forma de Pagamento:</S.Title>
            
            <S.Navigation> 
                <S.Button>
                    <Link to="/finalizarpedidostep2"> Voltar </Link>
                </S.Button> 
                <S.Button>
                    <Link to="/statuspedidos"> Finalizar </Link>
                </S.Button >
            </S.Navigation>          
        </S.Container>
    );
};

export default FinalPedidosStep3;