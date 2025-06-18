import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const boardSize = 15;

export default function Game02() {
  const navigate = useNavigate();

  const [board, setBoard] = useState(
    Array(boardSize)
      .fill(null)
      .map(() => Array(boardSize).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (row: number, col: number) => {
    if (board[row][col] || winner) return;

    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    if (checkWin(newBoard, row, col, currentPlayer)) {
      setWinner(currentPlayer);
    } else if (newBoard.flat().every((cell) => cell !== null)) {
      setWinner('Draw');
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWin = (
    board: string[][],
    row: number,
    col: number,
    player: string
  ) => {
    const directions = [
      { dr: 0, dc: 1 }, // Horizontal
      { dr: 1, dc: 0 }, // Vertical
      { dr: 1, dc: 1 }, // Diagonal /
      { dr: 1, dc: -1 }, // Diagonal \
    ];

    for (let { dr, dc } of directions) {
      let count = 1;

      for (let step = 1; step < 5; step++) {
        const r = row + dr * step;
        const c = col + dc * step;
        if (
          r >= 0 &&
          r < boardSize &&
          c >= 0 &&
          c < boardSize &&
          board[r][c] === player
        ) {
          count++;
        } else break;
      }

      for (let step = 1; step < 5; step++) {
        const r = row - dr * step;
        const c = col - dc * step;
        if (
          r >= 0 &&
          r < boardSize &&
          c >= 0 &&
          c < boardSize &&
          board[r][c] === player
        ) {
          count++;
        } else break;
      }

      if (count >= 5) return true;
    }

    return false;
  };

  const resetGame = () => {
    setBoard(
      Array(boardSize)
        .fill(null)
        .map(() => Array(boardSize).fill(null))
    );
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-200 to-orange-400 p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 drop-shadow">
        Cờ Caro - 2 Người Chơi
      </h1>

      <div className="mb-4 text-xl font-semibold text-gray-700">
        {winner
          ? winner === 'Draw'
            ? 'Hòa!'
            : `🎉 Người chơi ${winner} thắng!`
          : `Lượt: Người chơi ${currentPlayer}`}
      </div>

      <div
        className="grid gap-1 border-4 border-gray-700 p-1 bg-white"
        style={{ gridTemplateColumns: `repeat(${boardSize}, 32px)` }}
      >
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleClick(rowIndex, colIndex)}
              className={`w-8 h-8 flex items-center justify-center border border-gray-400 cursor-pointer hover:bg-gray-200 text-2xl font-bold 
              ${
                cell === 'X'
                  ? 'text-red-600'
                  : cell === 'O'
                  ? 'text-blue-600'
                  : ''
              }`}
            >
              {cell}
            </div>
          ))
        )}
      </div>

      <div className="flex space-x-4 mt-6">
        <Button
          onClick={resetGame}
          className="px-6 py-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition"
        >
          Chơi lại
        </Button>

        <Button
          onClick={() => navigate('/list-games')}
          className="px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
        >
          Quay về
        </Button>
      </div>
    </div>
  );
}
