import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
}); 


// const api = axios.create({
//      baseURL: 'http://129.148.42.252:5035'
// });




export async function cadastrarProduto(nome, preco, categoria, subcategoria, estoque, composicao, detalhes, disponivel) {
    const resp = await api.post('/produto', {
        nome: nome,
        preco: preco,
        categoria: categoria,
        subcategoria: subcategoria,
        estoque: estoque,
        composicao: composicao,
        detalhes: detalhes,         
        disponivel: disponivel
    });

    return resp.data;
};





export async function inserirImagem(imagem, id) {
    let form = new FormData();
    form.append('Produto', imagem);

    const resp = await api.post(`/produto/${id}/img`, form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return resp.status;
};



export async function deletarImg(imagem_produto_id) {
    const resp = await api.delete(`/deletar/img/${imagem_produto_id}`);
    return resp.status;
};







export async function ConsultarTodos() {
    const resp = await api.get('/listar/produtos');
    return resp.data;
};


export async function ConsultarUsuarios()  {
    const resp = await api.get('/user/buscar');
    return resp.data;
}


export async function ConsultarPorNome(nome) {    
    const resp = await api.get(`/buscar/produto?nome=${nome}`);
    return resp.data;
;}




export async function DeletarProduto(id) {
    const resp = await api.delete(`/deletar/produto/${id}`);
    return resp.status;
};



export async function BuscarCategoria() {
    const resp = await api.get(`/buscar/categoria`);
    return resp.data;
};






export async function BuscarSubCategoria() {
    const resp = await api.get(`/buscar/subCategoria`);
    return resp.data;
};





export async function BuscarProdutoPorId(id) {
    const resp = await api.get(`/buscar/produto/${id}`);
    return resp.data;
};







export async function alterarProduto(id, nome, preco, categoria, subcategoria, estoque, composicao, detalhes, disponivel) {
    const resp = await api.put(`/alterar/produto/${id}`, {
        nome: nome,
        preco: preco,
        categoria: categoria,
        subcategoria: subcategoria,
        estoque: estoque,
        composicao: composicao,
        detalhes: detalhes,         
        disponivel: disponivel
    });

    return resp.data;
};



export async function buscarTodasImagensProduto(id){
    const resp = await api.get(`/buscar/img/${id}`)

    return resp.data
}





export function BuscarImagem(imagem) {
    return `${api.getUri()}/${imagem}`
}   