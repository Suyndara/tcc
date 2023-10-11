import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
}); 




export async function SingUpAdm(email, senha) {
    const resp = await api.post('/adm/logar', {
        email: email,
        senha: senha
    });

    return resp.data
};  