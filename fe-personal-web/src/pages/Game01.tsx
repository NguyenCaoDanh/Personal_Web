import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Position {
  x: number;
  y: number;
}

const segmentSize = 20;

export default function SmoothSnakeGame() {
  const [boardSize, setBoardSize] = useState(400);
  const [snake, setSnake] = useState<Position[]>([
    { x: 200, y: 200 },
    { x: 180, y: 200 },
    { x: 160, y: 200 },
  ]);
  const [direction, setDirection] = useState<'UP' | 'DOWN' | 'LEFT' | 'RIGHT'>('RIGHT');
  const [food, setFood] = useState(generateFood(400));
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const requestRef = useRef<number | null>(null);
  const speed = 2;

  // Responsive board size
  useEffect(() => {
    const resizeBoard = () => {
      const width = window.innerWidth;
      const size = width < 500 ? width - 40 : 400;
      setBoardSize(size);
      setFood(generateFood(size));
    };
    resizeBoard();
    window.addEventListener('resize', resizeBoard);
    return () => window.removeEventListener('resize', resizeBoard);
  }, []);

  // Countdown
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Keyboard input
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
        case ' ':
          setIsPaused(!isPaused);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction, isPaused]);

  // Game loop
  useEffect(() => {
    if (gameOver || isPaused || countdown > 0) return;

    const animate = () => {
      moveSnake();
      requestRef.current = requestAnimationFrame(animate);
    };

    if (requestRef.current === null) {
      requestRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
    };
  }, [snake, direction, gameOver, isPaused, countdown]);

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case 'UP':
        head.y -= speed;
        break;
      case 'DOWN':
        head.y += speed;
        break;
      case 'LEFT':
        head.x -= speed;
        break;
      case 'RIGHT':
        head.x += speed;
        break;
    }

    for (let i = newSnake.length - 1; i > 0; i--) {
      newSnake[i] = { ...newSnake[i - 1] };
    }

    newSnake[0] = head;

    if (isCollision(head)) {
      setGameOver(true);
      return;
    }

    if (
      Math.abs(head.x - food.x) < segmentSize &&
      Math.abs(head.y - food.y) < segmentSize
    ) {
      newSnake.push({ ...newSnake[newSnake.length - 1] });
      setFood(generateFood(boardSize));
      setScore(score + 10);
    }

    setSnake(newSnake);
  };

  const isCollision = (head: Position) => {
    if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize)
      return true;
    return false;
  };

  const restartGame = () => {
    setSnake([
      { x: 200, y: 200 },
      { x: 180, y: 200 },
      { x: 160, y: 200 },
    ]);
    setDirection('RIGHT');
    setFood(generateFood(boardSize));
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
    setCountdown(3);
    if (requestRef.current !== null) {
      cancelAnimationFrame(requestRef.current);
      requestRef.current = null;
    }
  };

  if (countdown > 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 to-blue-400 p-6">
        <h1 className="text-9xl font-extrabold animate-pulse text-green-800">
          {countdown}
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 to-blue-400 p-6">
      <h1 className="text-5xl font-extrabold mb-4 text-green-900 animate-pulse drop-shadow-lg">
        🐍 Smooth Snake
      </h1>

      <div className="mb-4 text-xl text-green-800 font-semibold">
        Score: {score}
      </div>

      <div
        className="relative shadow-xl"
        style={{
          width: boardSize,
          height: boardSize,
          backgroundImage: `linear-gradient(to right, #d1fae5 1px, transparent 1px),
                            linear-gradient(to bottom, #d1fae5 1px, transparent 1px)`,
          backgroundSize: `${segmentSize}px ${segmentSize}px`,
          borderRadius: '1.5rem',
          border: '5px solid #065f46',
          overflow: 'hidden',
        }}
      >
        {snake.map((segment, idx) => (
          <motion.div
            key={idx}
            className="absolute bg-green-600"
            style={{
              width: segmentSize - 2,
              height: segmentSize - 2,
              top: segment.y + 1,
              left: segment.x + 1,
              borderRadius: idx === 0 ? '50%' : '25%',
              zIndex: snake.length - idx,
            }}
            animate={{ top: segment.y + 1, left: segment.x + 1 }}
            transition={{ ease: 'linear', duration: 0.1 }}
          />
        ))}

        <motion.div
          className="absolute bg-red-500"
          style={{
            width: segmentSize - 2,
            height: segmentSize - 2,
            top: food.y + 1,
            left: food.x + 1,
            borderRadius: '50%',
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
      </div>

      <div className="flex space-x-4 mt-6">
        <Button
          onClick={restartGame}
          className="px-6 py-2 rounded-full bg-green-700 text-white hover:bg-green-800 transition"
        >
          Restart
        </Button>
        <Button
          onClick={() => setIsPaused(!isPaused)}
          className="px-6 py-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition"
        >
          {isPaused ? 'Resume' : 'Pause'}
        </Button>
        <Link to="/">
          <Button variant="secondary" className="px-6 py-2 rounded-full">
            Home
          </Button>
        </Link>
      </div>

      {/* Mobile Controls */}
      {window.innerWidth < 768 && !gameOver && (
        <div className="mt-6 grid grid-cols-3 gap-2 w-48">
          <div></div>
          <Button onClick={() => setDirection('UP')} className="bg-green-500">↑</Button>
          <div></div>

          <Button onClick={() => setDirection('LEFT')} className="bg-green-500">←</Button>
          <div></div>
          <Button onClick={() => setDirection('RIGHT')} className="bg-green-500">→</Button>

          <div></div>
          <Button onClick={() => setDirection('DOWN')} className="bg-green-500">↓</Button>
          <div></div>
        </div>
      )}

      {gameOver && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center space-y-4 animate-bounce">
            <h2 className="text-5xl font-extrabold text-red-600 mb-4 drop-shadow">
              💀 Game Over!
            </h2>
            <p className="text-lg font-medium">Your Score: {score}</p>
            <div className="flex space-x-4 justify-center">
              <Button
                onClick={restartGame}
                className="px-6 py-2 rounded-full bg-green-700 text-white hover:bg-green-800 transition"
              >
                Restart
              </Button>
              <Link to="/">
                <Button variant="secondary" className="px-6 py-2 rounded-full">
                  Come Back
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function generateFood(boardSize: number): Position {
  return {
    x: Math.floor(Math.random() * (boardSize / segmentSize)) * segmentSize,
    y: Math.floor(Math.random() * (boardSize / segmentSize)) * segmentSize,
  };
}
