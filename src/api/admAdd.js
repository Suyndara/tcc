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




export async function AdicionarImg(imagem) {
    const formData = new FormData();
    formData.append('Produto', imagem)


    const resp = await api.post('/produto/img', formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });

    return resp.status;
};