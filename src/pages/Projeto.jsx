import { useParams } from "react-router-dom";

function Projeto(){
    const { id } = useParams()
  
    const projetos = {
        1: {
            nome: "projeto 1",
            descricao: "esse é o projeto 1"
        },
        2: {
            nome: "projeto 2",
            descricao: "esse é o projeto 2"
        },
        3: {
            nome: "projeto 3",
            descricao: "esse é o projeto 3"
        },
    }
    const projeto = projetos[id];
    if (!projeto) {
    return <h1>Projeto não encontrado.</h1>;
}

    return (
        <>
           <h className="titulog">{projeto.nome}</h>
           <p className="subtitle">{projeto.descricao}</p>
        </>
    )
}

export default Projeto