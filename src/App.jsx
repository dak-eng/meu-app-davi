import { useState } from 'react'
import heroImg from './assets/minecraft.png'
import './App.css'

function PrimeiroComponente() {

const nome = document.getElementsByName("nome");
   const exibirAlerta = () => {
    alert(`Você digitou: ${nome[0].value}`);
   }
  
  return (
    
  <div id="social">
    <h1>Qual seu nome?</h1>
    <input type="text" name="nome" placeholder='Digite seu nome...' />
<br />
    <input 
      type="button" 
      value="Mostrar" 
      onClick={exibirAlerta} 
    />
  
</div>
  )
}

function App() {
  const [count, setCount] = useState(67)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>casinobiribinha</h1>
          <p>
            casino vai aqui - <code>src/App.jsx</code> e biribinha aqui - <code>HMR</code>
          </p>
          <p>biluteteia gosta de codar em react
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      <PrimeiroComponente/>
      
      <br />
        
      </section>
      
      <div className="ticks"></div>
    </>
  )
}
export default App
