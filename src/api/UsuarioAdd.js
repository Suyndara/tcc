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









export async function BuscarCategoriaRelogio() {
    const resp = await api.get('/buscar/categoria/relogio');
    return resp.data;
}







export async function BuscarCategoriaEscapulario() {
    const resp = await api.get('/buscar/categoria/escapulario');
    return resp.data;
}





export async function BuscarCategoriaAlianca() {
    const resp = await api.get('/buscar/categoria/alianca');
    return resp.data;
}






export async function BuscarCategoriaCorrente() {
    const resp = await api.get('/buscar/categoria/corrente');
    return resp.data;
}




export async function BuscarCategoriaPulseira() {
    const resp = await api.get('/buscar/categoria/pulseira');
    return resp.data;
}




export async function BuscarCategoriaBrinco() {
    const resp = await api.get('/buscar/categoria/brinco');
    return resp.data;
}





export async function BuscarCategoriaPingente() {
    const resp = await api.get('/buscar/categoria/pingente');
    return resp.data;
}