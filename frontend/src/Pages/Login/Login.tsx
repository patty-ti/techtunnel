import * as S from './Login.styles';
import { useCallback, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';

const Login: React.FC = () => {    
    const auth = useContext(AuthContext);
    const navigate = useNavigate()
    // função para pegar os dados de login informados e armazena temporariamente  
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');      
    // função preventDefault para impedir que o form execute sua ação padrão de reload
    const handleSubmit = useCallback(async (e: any) => {
        e.preventDefault();        
    }, [email, password]);    

    const handleLogin = async () => {
        if(email && password) {
            const isLogged = await auth.signin(email, password);
            if(isLogged) {
                navigate('/');
            } else {
                alert('ERROR: Algo saiu errado! Tente novamente!');
            }
        }
    }

    return(            
            <S.Container>               
                <h1 className="title">Acesse sua conta!</h1>
                <S.LoginForm onSubmit={handleSubmit}>        
                <div className="wrap-input">
                    <input 
                        type="email" 
                        placeholder="Digite seu e-mail"
                        name="email"
                        id="email"     
                        value={email}                        
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>
                <div className="wrap-input">
                    <input 
                        type="password" 
                        placeholder="Digite sua senha" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Senha"></span>
                </div>
                <div className="container-login-form-btn">
                    <button onClick={handleLogin} type="submit">Acessar</button>
                </div>
                
                </S.LoginForm>
                <S.CriarConta>
                    <span className="criar-conta">Ainda não possui conta? </span> 
                    <Link to="/cadastrar" className="cadastrar">Criar Conta</Link>
                </S.CriarConta>                  
            </S.Container>   
            
    );
};

export default Login;