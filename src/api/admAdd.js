import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
}); 




export async function CadastrarJoia(nome, preco, estoque, disponivel, composicao, detalhes, categoria, subcategoria) {
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

    console.log(CadastrarJoia);

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