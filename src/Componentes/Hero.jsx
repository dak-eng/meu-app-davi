import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'

function Hero() {
  return ( 
  <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
           <img src={viteLogo} className="vite" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" width="170" height="179" alt="" />
        </div>
  )
}
export {Hero}