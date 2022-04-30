import * as S from './Cadastrar.styles';
import { useState } from 'react';
import Header from '../../Components/Header/Header';

const Cadastrar:React.FC<any> = () => {
    
    const [ email, setEmail ] = useState(" ");
    const [ password, setPassword ] = useState(" ");
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("submit", { email, password });    
    };

    return(
        <S.Container>     
            <Header /> 
            <S.FormCadastrar>      
            <h1 className="title">Cadastro Tech Tunnel</h1>
            <S.LoginForm onSubmit={handleSubmit}>  
            <div className="wrap-input">
                <input 
                    type="name" 
                    placeholder="Digite seu nome completo"
                    name="name"
                    id="name"                      
                    onChange={(e) => setEmail(e.target.value)}
                />                
            </div>      
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
                    placeholder="Crie sua senha" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
            </div>
            <div className="container-login-form-btn">
                <button>Criar</button>
            </div>            
            </S.LoginForm>            
            </S.FormCadastrar>                
        </S.Container>
    );
};

export default Cadastrar;