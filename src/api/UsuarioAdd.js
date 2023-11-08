import axios from 'axios';
// const api = axios.create({
//     baseURL: 'http://localhost:5000'
// }); 


const api = axios.create({
    baseURL: 'http://129.148.42.252:5038'
});




export async function BuscarUsuarioPorId(id) {
    const resp = await api.get(`/buscar/usuario/${id}`);
    return resp.data;
};
