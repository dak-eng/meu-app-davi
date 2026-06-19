import'./App.css'

function BotaoSenai() {
const clicarbotao = () => {
  alert("Este é o Botão")
}

  return (
  <button
    style={{
    background:"#fb83ff",
    color: "#000000",
    padding: "15px 25px",
    fontWeight: "bold",
    border: "none",
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
  
    <h1>Esse é meu botao senai!</h1>
    <BotaoSenai/>
    
  </div>
</>
  )
}
export default App
