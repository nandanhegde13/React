import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import nandan from './assets/nandan.jpeg'
import { core_components } from './data'
import './App.css'


function Components(prop)
{ return(
  <div>
   <p>{prop.title}</p>
   <p>{prop.description}</p>
   </div>
);
}

function Core({name,role})
{ return(
  <>
  <p>{name}</p>
  <p>{role}</p>
  </>
)
}
function Header()
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
function App() {
  const [count, setCount] = useState(0)

var arr = ['description1','description2','description3'];

var description = arr[Math.floor(Math.random()*arr.length)];
  return (
    <>
      <Components title= "test title" description = "test description"/>
      <Components title= "test title2" description = "test description2"/>
      <Core {...core_components[0]}/>
      <Core {...core_components[1]}/>      
      <Core {...core_components[2]}/>

      <Header/>
      <h1>{description} React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
