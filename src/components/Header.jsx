import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import nandan from '../assets/nandan.jpeg'

export function Header()
{
  return(
<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <img src = {nandan} alt="Nandan Logo"/>
      </div>

  )
}