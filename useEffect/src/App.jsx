import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    alert("2nd render")
  },[])
    let count_increase=count;
    var arr=new Array(20000)
    arr[19999]="mj"
    // alert(arr[19999])
    if (arr) {
      arr.map((item,i)=>{
        if (item==="mj") {
          
          
        }
      })
    }
    alert("1st render  ")

    
 
  // This useEffect is render when user can click count button then it is render
  // useEffect(()=>{
  //   alert("count is increased")
  // },[count])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
