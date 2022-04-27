import * as S from './Login.styles';
import React, { useState } from 'react';

const Login = () => {
    //função para pegar os dados de login informados e armazenar
    const [ email, setEmail ] = useState(" ");
    const [ password, setPassword ] = useState(" ");
    //função para impedir que o form execute sua ação padrão
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("submit", { email, password });
    }

    return(
        <S.Container>             
            <h1 className="title">Acesse sua conta!</h1>
            <S.LoginForm onSubmit={handleSubmit}>        
            <div className="wrap-input">
                <input 
                    type="email" 
                    placeholder="Digite seu e-mail"     
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
                <button>Acessar</button>
            </div>
            
            </S.LoginForm>
            <S.CriarConta>
                <span className="criar-conta">Ainda não possui conta? </span> 
                <a className="cadastrar" href="#"> Criar conta</a>
            </S.CriarConta>        
                    
            
        </S.Container>
    );
};

export default Login;