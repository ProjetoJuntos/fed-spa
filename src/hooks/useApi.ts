import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: { id: 3, name: 'Jose', email: 'jose@gmail.com' }
        };

        const response = await api.post('/validate', { token });
    },
    signin: async (email: string, password: string) => {
        //user fake
        return {
            user: { id: 3, name: 'Jose', email: 'jose@gmail.com' },
            token: '123456789'
        };
        const response = await api.post('/signin', { email, password });
        return response.data;
    },
    signout: async () => {
        const response = await api.post('/signout');
        return response.data;
    }
})