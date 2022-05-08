import * as S from './Header.styles';
import { useContext, useState } from 'react';
import Modal from '../../Components/Modal/Modal';
import Login from '../../Pages/Login/Login';
import { AuthContext } from '../../Contexts/AuthContext';

const Header = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const auth = useContext(AuthContext);

    return(
        <S.Header>            
            <S.EcommerceName>
                <h2>Tech Tunnel</h2>
            </S.EcommerceName>

            <S.Menu>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/contato">About</a></li>
                        <li>
                            <button onClick={() => setIsModalVisible(true)}>Login</button>
                            {auth.user && <a href="javascript:;">SAIR</a>}
                            {isModalVisible ? (
                                <Modal onClose={() => setIsModalVisible(false)}>
                                    <Login />
                                </Modal>): null}
                        </li>
                        <li className="hello">{auth.user?.email}</li>
                    </ul>
                </nav>
            </S.Menu>            
        </S.Header>        
    );
}

export default Header;