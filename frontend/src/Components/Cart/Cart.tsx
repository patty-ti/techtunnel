import { Wrapper } from './Cart.styles';
import CartItems from '../CartItems/CartItems';

import { CartItemType } from '../../Pages/Home/Home';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void; 
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotal = (items: CartItemType[]) => 
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

    return (
        <Wrapper>
            <h2>Itens do seu carrinho:</h2>
            {cartItems.length === 0 ? <p>Seu carrinho está vazio!</p> : null}
            {cartItems.map(item => (
                <CartItems 
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2>Total: R$ {calculateTotal(cartItems).toFixed(2)}</h2>            
            <Button disabled={cartItems.length === 0}>
            <Link to="/finalizarpedido"> Finalizar Pedido </Link>
            </Button>
        </Wrapper>
    );
};

export default Cart;