import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, createSession } from '../Services/api';

export const AuthContext = createContext(
    {}
);

export const AuthProvider: React.FC<any> = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    //const para controlar o efeito de loading, até que seja renderizado 
    const [ loading, setLoading] = useState(true);

    //recuperar usuário para mantê-lo logado após atualizar página
    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }
        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        console.log("login auth", { email, password });

        const response = await createSession(email, password);
        console.log("login", response.data);
        
        const loggedUser = response.data.user;
        const token = response.data.token;

        //armazenamento do usuário no localstorage
        localStorage.setItem("user", JSON.stringify(loggedUser));
        //retornar token após consulta na Api
        localStorage.setItem("token", token);
        //faz a api sempre enviar o token após uma requisição 
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        //após a verificação seta o usuário e volta para a home
        setUser(loggedUser);
        navigate("/");               
    };

    const logout = () => {
        console.log('logout');

        localStorage.removeItem("user");
        localStorage.removeItem("token");

        api.defaults.headers.common['Authorization'] = "";

        setUser(null);
        navigate("/login");
    };

    const authenticated = !!user;
    return(
        <AuthContext.Provider value={{ 
            authenticated,
            user,
            loading, 
            login,
            logout 
        }}>{ children }
        </AuthContext.Provider>
    );
};