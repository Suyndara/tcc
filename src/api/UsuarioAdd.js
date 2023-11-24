import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
}); 


// const api = axios.create({
//     baseURL: 'http://129.148.42.252:5035'
// });




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



export async function concluirPedido(pedido) {
    const resp = await api.post('/pedido', {
        cliente: pedido.cliente,
        total: pedido.total
    })

    return resp.data
}

export async function inserirItensPedido(itens, idPedido){
    let respItens = []
    // console.log(itens);

    for(let cont = 0; cont < itens.length; cont++){
        const resp = await api.post('/pedido/item', {
            pedido: idPedido,
            produto: itens[cont].produto_id,
            quantidade: itens[cont].qtd
        })
        respItens[cont] = resp.data
    }
    // console.log(respItens);
};










export async function InserirEndereco(nome, enderecoRua, cep, numeroCasa, complemento, bairro, cidade, estado) {
    const resp = api.post('/usuario/endereco', {
        nome: nome,
        enderecoRua: enderecoRua,
        cep: cep,
        numeroCasa: numeroCasa,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado
    });

    return resp.data;
}