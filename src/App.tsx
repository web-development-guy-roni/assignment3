// Guy-Rozenbaum-214424814-Roni-Taktook-213207640

import { useState } from 'react'
import Board from './Board'
import { calculateWinner } from './utils'

function App() {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)

  const winInfo = calculateWinner(squares)
  const winner = winInfo?.winner
  const winningLine = winInfo?.line || null

  const isDraw = !winner && squares.every(square => square !== null)

  const handleClick = (i: number) => {
    if (squares[i] || winner) {
      return
    }
    const nextSquares = [...squares] // Immutable update logic
    nextSquares[i] = isXNext ? 'X' : 'O'
    setSquares(nextSquares)
    setIsXNext(!isXNext)
  }

  const handleRestart = () => {
    setSquares(Array(9).fill(null))
    setIsXNext(true)
  }

  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else if (isDraw) {
    status = "Draw!"
  } else {
    status = `Next Turn: ${isXNext ? 'X' : 'O'}`
  }

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <h1 className="mb-4">Tic Tac Toe</h1>
      <div className="mb-3 fs-3 fw-bold">{status}</div>
      <Board
        squares={squares}
        onClick={handleClick}
        winningLine={winningLine}
      />
      <button
        className="btn btn-outline-primary mt-4"
        onClick={handleRestart}
      >
        Restart Game
      </button>
    </div>
  )
}

export default App
