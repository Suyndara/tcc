import axios from 'axios';
const api =axios.create({
    baseURL: 'http://localhost:5000'
});







export async function BuscarUsuarioPorId(id) {
    const resp = await api.get(`/buscar/usuario/${id}`);
    return resp.data;
};







export async function AlterarUsuario(id, ) {
    
}