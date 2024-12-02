import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const createBoard = () => {
    let mineCount = 0;
    let board = []
    let mines = []
    for(let j=1; j<=10; j++){
      mines.push(Math.floor(Math.random() * 100) + 1)
      mines.sort()

    }
    console.log(mines)
    for (let i=1; i <= 100; i++){
      if(mines[mineCount]===i){
      board.push(<div key = {i} className = 'square' id = 'mine'></div>)
      mineCount++;
      console.log(mineCount)
      } else{
        board.push(<div key = {i} className = 'square' id = {i}></div>)
      }

    }
    return (
      board
    )
  }

  return (
    <div className = 'board'>
      {createBoard()}
    </div>
  )
}

export default App
