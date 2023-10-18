import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
}); 




export async function cadastrarJoia(nome, preco, categoria, subcategoria, estoque, composicao, detalhes, disponivel) {
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






export async function ConsultarTodos() {
    const resp = await api.get('/listar/produtos');
    return resp.data;
}



export async function ConsultarPorNome(nome) {    
    const resp = await api.get(`/buscar/produto?nome=${nome}`);
    return resp.data;
}
