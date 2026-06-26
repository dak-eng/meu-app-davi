import { Link } from "react-router-dom"


function Hom(){
    return(
    <>
        <h className="titulog">Home</h>
        <p className="subtitle">casinha papa</p>

<div className="projetos">

        <Link to="/Projeto/1" className="projeto-card">
        Projeto 1
        </Link>
    <br />
        <Link to="/Projeto/2" className="projeto-card">
        Projeto 2
        </Link>
    <br />        
        <Link to="/Projeto/3" className="projeto-card">
        Projeto 3
        </Link>
</div>

    </>
    )
}
export default Hom