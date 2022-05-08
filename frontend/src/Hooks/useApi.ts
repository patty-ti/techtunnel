import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        // return {
        //     user: { id: 1, name: 'Fulano', email: 'fulaninho@teste.com'},
        // };
        const response = await api.post('/validate', {token});
        return response.data;
    },
    signin: async (email: string, password: string) => {
        // return {
        //     user: { id: 1, name: 'Fulano', email: 'fulaninho@teste.com'},
        //     token: '413574351246351156341321'
        // };
        const response = await api.post('/signin', {email: email, password: password});
        return response.data;
    },
    logout: async () => {
        const response = await api.post('/logout');
        return response.data; 
    }
});