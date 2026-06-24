import {Botao} from './Componentes/Botao.jsx'
import { Titulo } from './Componentes/Titulo.jsx'
import { Hero } from './Componentes/Hero.jsx'
import { Social } from './Componentes/Social.jsx'
import './App.css'


function App() {

  return (
    <>
      <section id="center">
        <Hero/>
        <Titulo/>
        <Botao/>
      </section>
      
      <br />
      
      <div className="ticks"></div>

      <section id="next-steps">
        <Social/>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}
export default App
