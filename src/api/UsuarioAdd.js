import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://localhost:5000'
// }); 


const api = axios.create({
    baseURL: 'http://129.148.42.252:5035'
});




export async function BuscarUsuarioPorId(id) {
    const resp = await api.get(`/buscar/usuario/${id}`);
    return resp.data;
};



export async function AlterarPerfilUsuario(id, cliente, email, telefone, senha, cpf, nascimento) {
    const resp = await api.put(`/usuario/alterar/${id}`,{
        cliente: cliente,
        email: email,
        telefone: telefone,
        senha: senha,
        cpf: cpf,
        nascimento: nascimento
    });

    return resp.data;
};







// export async function ExcluirUsuario(id) {
//     const resp = await api.delete(`/deletar/usuario/${id}`);
//     return resp.status;
// }