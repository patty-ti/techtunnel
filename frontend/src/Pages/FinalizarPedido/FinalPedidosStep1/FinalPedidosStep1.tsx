import Header from '../../../Components/Header/Header';
import * as S from './FinalPedidosStep1.styles';
import CartItems from '../../../Components/CartItems/CartItems';
import { CartItemType } from '../../../Pages/Home/Home';
import { Link } from 'react-router-dom';

// export type Props = {
//     items: CartItemType[];
//     addProd: (clickedItem: CartItemType) => void;
//     removeProd: (id: number) => void; 
// };

// const FinalPedidosStep1: React.FC<Props> = ({ items, addProd, removeProd }) => {
//     const calculateTotal = (items: CartItemType[]) => 
//         items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
const FinalPedidosStep1 = () => {
    return(
        <S.Container> 
            <Header />
                <div>            
                    <h1 className="title">Finalizar Pedido!</h1>
                </div> 
                <div>            
                    {/* <h2 className="description">Confirme os itens do seu pedido:</h2>                 */}
                </div>

            {/* <S.Wrapper>                
                {items.map(item => (
                    <CartItems 
                        key={item.id}
                        item={item}
                        addToCart={addProd}
                        removeFromCart={removeProd}
                    />
                ))}
                <h2>Total: R$ {calculateTotal(items).toFixed(2)}</h2>                  
            </S.Wrapper> */}
            
            <S.Navigation>
                <S.Button>
                    <Link to="/"> Continuar Comprando </Link>
                </S.Button> 
                <S.Button>
                    <Link to="/finalizarpedidostep2"> Próximo </Link>
                </S.Button>
            </S.Navigation>          
        </S.Container>
    );
};

export default FinalPedidosStep1;