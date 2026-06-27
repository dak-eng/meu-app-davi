import { useEffect, useState } from "react";
import api from "../Services/api";

function Usuarios() {
    console.log("Componente Usuarios carregou");
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    const [busca, setBusca] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

   
    const [editandoId, setEditandoId] = useState(null);

    useEffect(() => {
        api.get("/users")
        .then((resposta) =>{
            setUsuarios(resposta.data);
        })
        .catch((erro) => {
            setErro(erro.menssage);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [])

    function criarUsuario(e) {
        e.preventDefault();

        const dadosUsuario = {
            name: nome,
            email: email,
        };

        if (editandoId) {
            api.put(`/users/${editandoId}`, dadosUsuario)
            .then(() => {
                
                const listaAtualizada = usuarios.map((usuario) =>
                usuario.id === editandoId
                ? {...usuario, ...dadosUsuario}
                : usuario,
                );

                setUsuarios(listaAtualizada);
                setEditandoId(null);
                setNome("");
                setEmail("");
                
            })
            .catch((erro) => {
            setErro(erro.menssage);
            });
        return;
        }
        const novoUsuario = {
            id: Date.now(),
            ...dadosUsuario,
        };

        api.post("/users", novoUsuario)
        .then(() => {
            setUsuarios([...usuarios, novoUsuario]);
            setNome("")
            setEmail("");
        })
        .catch((erro) => {
            setErro(erro.menssage);
        });
    }

    function iniciarEdicao(usuario) {
        setEditandoId(usuario.id);
        setNome(usuario.name);
        setEmail(usuario.email);
    }

    function deletarUsuario(id){
        api.delete(`/users/${id}`)
        .then(() => {
            const novaLista = usuarios.filter((usuario) => usuario.id !== id);
            setUsuarios(novaLista)
        })
        .catch((erro) => {
            setErro(erro.menssage);
        })
    }
    
    const usuariosFiltrados = usuarios.filter((usuario) => 
    usuario.name.toLowerCase().includes(busca.toLowerCase())
)

    if (loading) {
        return <p>Carregando usuários...</p>;
    }
    if (erro) {
        return <p>Erro: {erro}</p>
    }
    return (
        <div className="crud-container">
            <h2>Lista de usuários</h2>
            
            <input className="search-input" type="text" placeholder="Buscar usuário..." value={busca} onChange={(e) => setBusca(e.target.value)}/>
            
            <form className="crud-form" onSubmit={criarUsuario}>

                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button className="submit" type="submit">{editandoId ? "Salvar Alterações" : "Cadastrar"} </button>

            </form>
            <p className="contador">  
                {usuariosFiltrados.length} usuários encontrados
                </p>
            <ul className="user-list">
                
                {usuariosFiltrados.map((usuario) => (
                    <li className="user-card" key={usuario.id}>
                        <div>
                        <strong>{usuario.name}</strong>
                        <br />
                        {usuario.email}
                        </div>
                        <div className="user-actions">
                    <button onClick={() => iniciarEdicao(usuario)}>
                        Editar
                    </button>

                    <button onClick={() => deletarUsuario(usuario.id)}>
                        Excluir
                    </button>
                        </div>          
                    </li>
                ))}

            </ul>
        </div>
    );
}
export default Usuarios