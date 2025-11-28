import { useState, useEffect, useRef } from "react";
import "./TypingBattleGame.css";

const DUMMY_SENTENCES = [
  "빠른 갈색 여우가 게으른 개를 뛰어 넘습니다.",
  "인간의 삶 전체는 단지 한 순간에 불과하다.",
  "성공의 비결은 단 한 가지, 절대로 포기하지 않는 것이다.",
  "가장 큰 위험은 위험 없는 삶이다.",
  "타이핑 연습은 꾸준함이 생명입니다.",
];

const getRandomSentence = () => {
  return DUMMY_SENTENCES[Math.floor(Math.random() * DUMMY_SENTENCES.length)];
};

export default function TypingBattleGame() {
  const [sentence, setSentence] = useState(getRandomSentence);
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [startTime, setStartTime] = useState(() => Date.now());
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const startNewGame = () => {
    setSentence(getRandomSentence());
    setInputValue("");
    setIsCorrect(null);
    setStartTime(Date.now());
    setElapsedTime(0);
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

    if (value === sentence) {
      setIsCorrect(true);
      const end = Date.now();
      setElapsedTime((end - startTime) / 1000); // 초 단위
    } else if (isCorrect) {
      setIsCorrect(false);
    }
  };

  return (
    <div className="typing-game-container">
      <div className="sentence-display">
        <p>{sentence}</p>
      </div>
      <input
        ref={inputRef}
        type="text"
        className="typing-input"
        value={inputValue}
        onChange={handleInputChange}
        disabled={isCorrect === true}
        placeholder="위 문장을 따라 입력하세요..."
      />
      <button onClick={startNewGame} className="reset-button">
        다른 문장으로 시작
      </button>
      {isCorrect === true && (
        <div className="typing-result">
          <p>
            🎉 정확합니다! 완료 시간: <span>{elapsedTime.toFixed(2)}초</span>
          </p>
        </div>
      )}
    </div>
  );
}
