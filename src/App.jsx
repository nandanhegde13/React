import { useState } from 'react'

import { core_components } from './data'
import './App.css'
import {Header} from "./components/Header.jsx"
import { Core } from './components/Core'
import { Components } from './components/Components'
import {TabButton} from './components/TabButton'
import { EXAMPLES } from './components/data'

function App() {
   var [state1,state2] = useState('components');
  
   function handleClick(para)
    {
        console.log(para);
        state2(para);
    }

  const [count, setCount] = useState(0)

var arr = ['description1','description2','description3'];

var description = arr[Math.floor(Math.random()*arr.length)];
  return (
    <>
    <Header/>
      <Components title= "test title" description = "test description"/>
      <Components title= "test title2" description = "test description2"/>
      <Core {...core_components[0]}/>
      <Core {...core_components[1]}/>      
      <Core {...core_components[2]}/>

      
      <h1>{description} React</h1>
      <TabButton name="JSX" onSelect={() => handleClick('components')}></TabButton>
      <TabButton name="Test" onSelect={() => handleClick('jsx')}></TabButton>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
         <h3>{EXAMPLES[state1].title}</h3>
         <p>{EXAMPLES[state1].description}</p>
         <pre>
          <code>{EXAMPLES[state1].code}</code>
         </pre>



      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
