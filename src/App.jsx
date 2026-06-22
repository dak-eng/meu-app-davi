import minecraft from './assets/minecraft.png'
import'./App.css'

function BotaoSenai() {
const clicarbotao = () => {
  alert("Este é o Botão")
}

  return (
  <button
    style={{
    background:"linear-gradient(135deg, #d859ff, #fb83ff)",
    color: "#000000",
    padding: "15px 25px",
    fontWeight: "bold",
    borderRadius:"12px",
    border:"none",
    boxShadow:"0 4px 15px rgba(255, 1, 242, 0.47)"
  }}
  onClick = {clicarbotao}
  >

Clique aqui!
</button>
  );
}

function App() {

  return (
<>
  <div>
  
    <h1 className="font">Esse é meu botao senai!</h1>
    <BotaoSenai/>
   <br/><br/><br/>
   <div>
    <img src={minecraft} alt="minecraft" className="minecraft-img"></img>
   </div>
  </div>
</>
  )
}

export default App
