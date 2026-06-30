import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import  Hom  from './pages/Home.jsx'
import  Cont  from './Pages/Contato.jsx'
import  Sob  from './Pages/Sobre.jsx'
import  Painel  from './Pages/Painel.jsx'
import  Projeto  from './Pages/Projeto.jsx'
import Usuarios from './Componentes/Usuarios.jsx'
import Cep from './Componentes/Cep.jsx'
import './App.css'



function App() {

  return (
    <>
  <div>
     <nav className='navbar'>
    <Painel />

     </nav>
    <Routes>
      <Route path="/"element={<><Hom /> <Usuarios /></>}/>
      <Route path="/Contato"element={<Cont />}/>
      <Route path="/Sobre"element={<Sob />}/>
      <Route path="/Projeto/:id" element={<Projeto />}/>
      <Route path="/cep/:id"element={<Cep />}/>
    </Routes>
    <Link to="/cep/21050700" className="projeto-card">API de CEP</Link>
  </div>
    </>
  )
}
export default App;
