import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Position {
  x: number;
  y: number;
}

const boardSize = 20;

const generateFood = (snakePositions: Position[]): Position => {
  let newFood;
  do {
    newFood = {
      x: Math.floor(Math.random() * boardSize),
      y: Math.floor(Math.random() * boardSize),
    };
  } while (snakePositions.some(pos => pos.x === newFood.x && pos.y === newFood.y));

  return newFood;
};

export default function Game01() {
  const initialSnake: Position[] = [{ x: 8, y: 8 }];

  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(generateFood(initialSnake));
  const [direction, setDirection] = useState<'UP' | 'DOWN' | 'LEFT' | 'RIGHT'>('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(200);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      moveSnake();
    }, speed);

    return () => clearInterval(interval);
  }, [snake, direction, gameOver, speed]);

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case 'UP':
        head.y -= 1;
        break;
      case 'DOWN':
        head.y += 1;
        break;
      case 'LEFT':
        head.x -= 1;
        break;
      case 'RIGHT':
        head.x += 1;
        break;
    }

    if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize || isSnake(head)) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setFood(generateFood(newSnake));
      setScore(score + 10);
      if (speed > 50) setSpeed(speed - 10);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const isSnake = (position: Position) => {
    return snake.some(segment => segment.x === position.x && segment.y === position.y);
  };

  const restartGame = () => {
    setSnake(initialSnake);
    setFood(generateFood(initialSnake));
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setSpeed(200);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 to-blue-400 p-4">
      <h1 className="text-5xl font-bold mb-4 text-green-800 animate-pulse">🐍 Snake Game</h1>

      <div className="mb-4 text-lg text-green-900 font-medium">Score: {score}</div>

      {gameOver && (
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          className="mb-4 text-3xl text-red-600 font-bold animate-bounce"
        >Game Over!</motion.div>
      )}

      <div
        className="grid bg-white border-8 border-green-700 rounded-lg shadow-lg"
        style={{
          gridTemplateRows: `repeat(${boardSize}, 20px)`,
          gridTemplateColumns: `repeat(${boardSize}, 20px)`,
        }}
      >
        {Array.from({ length: boardSize * boardSize }).map((_, idx) => {
          const x = idx % boardSize;
          const y = Math.floor(idx / boardSize);
          const isSnakeCell = snake.some(segment => segment.x === x && segment.y === y);
          const isFoodCell = food.x === x && food.y === y;

          return (
            <motion.div
              key={idx}
              className={`w-5 h-5 border ${isSnakeCell ? 'bg-green-700' : isFoodCell ? 'bg-red-500' : ''}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            ></motion.div>
          );
        })}
      </div>

      <div className="flex space-x-4 mt-6">
        <Button onClick={restartGame}>Restart</Button>
        <Link to="/">
          <Button variant="secondary">Home</Button>
        </Link>
      </div>
    </div>
  );
}