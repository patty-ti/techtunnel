import Header from '../../Components/Header/Header';
import * as S from './StatusPedidos.styles';

const StatusPedidos = () => {    
    return(
        <S.Container> 
            <Header />            
            <h1 className="title">Acompanhe Seus Pedidos!</h1>  
                    
        </S.Container>
    );
};

export default StatusPedidos;