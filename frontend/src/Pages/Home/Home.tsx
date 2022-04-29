import { useEffect, useState } from 'react';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

import { Container, Wrapper, StyledButton } from '../../App.styles';
import Item from '../../Components/Items/Items'
import Cart from '../../Components/Cart/Cart';
import Header from '../../Components/Header/Header';
import Search from '../../Components/Search/Search';



export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const Home = () => {
  const [ cartOpen, setCartOpen ] = useState(false);
  const [ cartItems, setCartItems ] = useState([] as CartItemType[]);
  const [ initialProducts, setInitialProducts ] = useState([]);
  const [ products, setProducts ] = useState([]);

  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    getProducts();
}, []);

  const getProducts = async () => {
    setLoading(true);

    const response = await fetch('https://fakestoreapi.com/products');
    if(response.status === 200) {
      const data = await response.json();
        setInitialProducts(data);
        setProducts(data);
        setLoading(false)
    } else {
      setError(true);
    }
  }

const getTotalItems = (items: CartItemType[]) => 
    items.reduce((ack: number, item) => ack + item.amount, 0);

const handleAddToCart = (clickedItem: CartItemType) => {
  setCartItems(prev => {
    const isItemInCart = prev.find(item => item.id === clickedItem.id);
    if(isItemInCart) {
      return prev.map(item => 
        item.id === clickedItem.id 
        ? { ...item, amount: item.amount + 1 }
        : item
      );
    }
    return [...prev, { ...clickedItem, amount: 1}];
  })
};

const handleRemoveFromCart = (id: number) => {
  setCartItems(prev =>  
    prev.reduce((ack, item) => {
      if(item.id === id) {
        if(item.amount === 1) return ack;
        return [...ack, { ...item, amount: item.amount -1}];
      } else {
        return [...ack, item];
      }
    }, [] as CartItemType[])
  );
};

const handleChangeSearch = (target: any) => {
  if(!target.value) {
      setProducts(initialProducts)
      return
  }

  const filterRepository = products.filter((item: any) => item.title.includes(target.value) || "");
  setProducts(filterRepository);
}

if(loading) return <LinearProgress />;
if(error) return <div>Algo deu errado...</div>;

return (  
  
  <Container>
    
    <Header />    
    <Search handleChangeSearch={handleChangeSearch} />

    <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'></Badge>
        <AddShoppingCartIcon />
      </StyledButton>
    
    <Wrapper>  
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
      <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>
      </Drawer>      

      <Grid container spacing={3}>
        {products?.map((item, index) => {
          return (
            <Grid item key={index} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
        )})}
      </Grid>
      
    </Wrapper>
  </Container>
  
  );
};

export default Home;
