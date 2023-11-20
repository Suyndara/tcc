import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
}); 


// const api = axios.create({
//     baseURL: 'http://129.148.42.252:5035'
// });






export async function LoginUsuario(cliente, email) {
    const resp = await api.post('/usuario/login', {
        cliente: cliente,
        email: email
    });
    
    return resp.data;
};







export async function SingUpUsuario(email, senha) {
    const resp = await api.post('/usuario/logar', {
        email: email,
        senha: senha
    });

    return resp.data;
};