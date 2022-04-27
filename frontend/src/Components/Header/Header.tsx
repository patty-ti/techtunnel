import * as S from './Header.styles';
import { useState } from 'react';
import Modal from '../../Components/Modal/Modal';
import Login from '../../Pages/Login/Login';

import { Link } from 'react-router-dom';




const Header = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return(
        <S.Header>            
            <S.EcommerceName>
                <h2>E-commerce Tech Tunnel</h2>
            </S.EcommerceName>

            <S.Menu>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/contato">Contato</a></li>
                        <li>
                            <button onClick={() => setIsModalVisible(true)}>Login</button>
                            {isModalVisible ? (
                            <Modal onClose={() => setIsModalVisible(false)}>
                                <Login />
                            </Modal>): null}
                        </li>
                    </ul>
                </nav>
                </S.Menu>
                
                <>                    
                    {/* <Link to="/login">Login</Link>
                    <Router exact path="/login"><Login /></Router> */}
                </>
            
            
        </S.Header>        
    );
}

export default Header;