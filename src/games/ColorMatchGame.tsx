import { useState, useEffect, useRef } from "react";
import "./ColorMatchGame.css";

const COLORS = [
  { emoji: "🟥", name: "빨강" },
  { emoji: "🟩", name: "초록" },
  { emoji: "🟦", name: "파랑" },
  { emoji: "🟨", name: "노랑" },
];

const GRID_SIZE = 25; // 5x5 grid

const generateNewGame = () => {
  const newGrid: string[] = [];
  const target = COLORS[Math.floor(Math.random() * COLORS.length)];

  for (let i = 0; i < GRID_SIZE; i++) {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    newGrid.push(randomColor.emoji);
  }

  // Ensure target color appears at least once
  const randomIndex = Math.floor(Math.random() * GRID_SIZE);
  newGrid[randomIndex] = target.emoji;

  const count = newGrid.filter((emoji) => emoji === target.emoji).length;

  return {
    grid: newGrid,
    targetColor: target,
    answerCount: count,
  };
};

export default function ColorMatchGame() {
  const [gameState, setGameState] = useState(generateNewGame);
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const startNewGame = () => {
    setGameState(generateNewGame());
    setInputValue("");
    setIsCorrect(null);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const userAnswer = parseInt(inputValue, 10);
    if (userAnswer === gameState.answerCount) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="color-match-container">
      <div className="color-grid">
        {gameState.grid.map((emoji, index) => (
          <span key={index} className="grid-item">
            {emoji}
          </span>
        ))}
      </div>
      <p className="question-text">
        이 중에서 <strong>{gameState.targetColor.name}</strong>(
        {gameState.targetColor.emoji}) 색은 총 몇 개일까요?
      </p>
      <div className="quiz-controls">
        <input
          ref={inputRef}
          type="number"
          className="quiz-input"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={isCorrect === true}
          placeholder="개수를 입력하세요..."
        />
        <button
          onClick={handleSubmit}
          className="submit-button"
          disabled={isCorrect === true}
        >
          정답 확인
        </button>
      </div>

      {isCorrect === true && (
        <div className="quiz-result correct">
          <p>🎉 정답입니다!</p>
          <button onClick={startNewGame}>다음 문제</button>
        </div>
      )}
      {isCorrect === false && (
        <div className="quiz-result incorrect">
          <p>❌ 틀렸습니다. 다시 시도해보세요!</p>
        </div>
      )}
    </div>
  );
}
