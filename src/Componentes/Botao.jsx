import { useState } from 'react'

function Botao() {
 const [count, setCount] = useState(0)
  
  return (
    <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
  )
}

export {Botao}