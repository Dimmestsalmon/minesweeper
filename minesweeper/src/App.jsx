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
      mines.sort((a, b) => a - b)
    }

    for (let i=1; i <= 100; i++){
      if(mines[mineCount]===i){
      board.push(<div key = {i} className = 'square mine' id = {`square${i}`} onClick = {() => checkSquare(event.target.className)}>mine</div>)
      mineCount++;
      } else{
        board.push(<div key = {i} className = 'square' id = {`square${i}`} onClick = {() => checkSquare(event.target.className)}></div>)
      }
    }
    return (
      board
    )
  }

  const checkSquare = (targetCheck) => {
    if(targetCheck === 'square mine'){
      console.log('Game Over')
    } else{
      let oldId = event.target.id
    let newId = oldId.match(/(\d+)/)[0]
      noMines(newId)
  }
  }

  const noMines = (newId) => {
    let minesAround = 0;
    document.querySelector(`#${event.target.id}`).style.backgroundColor = 'white'
    for(let i=-11; i<=11; i++){

      if(i === -9 || i === -10 || i === -11 || i === -1 || i === 1 || i === 9 || i === 10 || i === 11){
        if(document.querySelector(`#square${parseInt(newId) + i}`).className != 'square mine'){
          document.querySelector(`#square${parseInt(newId) + i}`).style.backgroundColor = 'white'
          // noMines(parseInt(newId)+i)
        } else {
          minesAround ++;
          console.log(minesAround)
          document.querySelector(`#${event.target.id}`).innerHTML = minesAround
        }
      }

    }
  }

  return (
    <div className = 'board'>
      {createBoard()}
    </div>
  )
}

export default App
