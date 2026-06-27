import { Outlet, Link } from 'react-router-dom';


function Painel() {
  return (
    <div>
      <h2 className='painel'>Painel</h2>
      <nav>

        <Link to="/Sobre">
          Sobre
        </Link>

        <Link to="/Contato">
          Contato
        </Link>
      </nav>

      <Outlet />
    </div>
  )
}
export default Painel