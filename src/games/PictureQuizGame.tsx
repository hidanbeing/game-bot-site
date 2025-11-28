import { useState, useEffect, useRef } from "react";
import "./PictureQuizGame.css";

const DUMMY_PICTURES = [
  {
    art: `
      *
     ***
    *****
     ***
      *
    `,
    answer: "별",
  },
  {
    art: `
      /\\_/\\
     ( o.o )
      > ^ <
    `,
    answer: "고양이",
  },
  {
    art: `
     /\
    /  \
   /____\
   |    |
   |    |
    `,
    answer: "집",
  },
];

const getRandomPicture = () => {
  return DUMMY_PICTURES[Math.floor(Math.random() * DUMMY_PICTURES.length)];
};

export default function PictureQuizGame() {
  const [picture, setPicture] = useState(getRandomPicture);
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const startNewGame = () => {
    setPicture(getRandomPicture());
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
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === picture.answer) {
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
    <div className="picture-quiz-container">
      <pre className="picture-display">{picture.art}</pre>
      <div className="quiz-controls">
        <input
          ref={inputRef}
          type="text"
          className="quiz-input"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={isCorrect === true}
          placeholder="그림이 무엇인지 맞춰보세요..."
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
