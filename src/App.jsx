import { Routes, Route } from 'react-router-dom'
import  Hom  from './pages/Home.jsx'
import  Cont  from './pages/Contato.jsx'
import  Sob  from './pages/Sobre.jsx'
import  Painel  from './Pages/Painel.jsx'
import  Projeto  from './Pages/Projeto.jsx'
import Usuarios from './Componentes/Usuarios.jsx'
import './App.css'



function App() {

  return (
    <>
  <div>
     <nav className='navbar'>
    <Painel />

     </nav>
    <Routes>
      <Route path="/"element={<Hom /> ,<Usuarios />}/>
      <Route path="/Contato"element={<Cont />}/>
      <Route path="/Sobre"element={<Sob />}/>
      <Route path="/Projeto/:id" element={<Projeto />}/>
    </Routes>

    
  </div>
    </>
  )
}
export default App;
