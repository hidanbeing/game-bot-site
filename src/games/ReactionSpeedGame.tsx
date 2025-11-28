import { useState, useEffect, useRef } from "react";
import "./ReactionSpeedGame.css";

type GameState = "waiting" | "ready" | "clicked" | "result";

export default function ReactionSpeedGame() {
  const [gameState, setGameState] = useState<GameState>("waiting");
  const [result, setResult] = useState<number>(0);
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  const startGame = () => {
    const randomDelay = Math.random() * 3000 + 1000; // 1-4초 사이 랜덤 딜레이

    timerRef.current = window.setTimeout(() => {
      setGameState("ready");
      startTimeRef.current = Date.now();
    }, randomDelay);
  };

  const handleClick = () => {
    if (gameState === "ready") {
      const endTime = Date.now();
      setResult(endTime - startTimeRef.current);
      setGameState("clicked");
    } else if (gameState === "waiting") {
      // 너무 빨리 눌렀을 때
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      setGameState("result");
      setResult(-1); // 너무 빨리 눌렀다는 의미
    }
  };

  const resetGame = () => {
    setGameState("waiting");
    setResult(0);
    startGame();
  };

  useEffect(() => {
    startGame();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const renderContent = () => {
    switch (gameState) {
      case "waiting":
        return (
          <div className="game-screen waiting" onClick={handleClick}>
            <h2>잠시만 기다리세요...</h2>
            <p>화면이 바뀌면 바로 클릭하세요!</p>
          </div>
        );
      case "ready":
        return (
          <div className="game-screen ready" onClick={handleClick}>
            <h2>지금 클릭하세요!</h2>
          </div>
        );
      case "clicked":
      case "result":
        return (
          <div className="game-screen result">
            {result === -1 ? (
              <h2>너무 빨리 클릭했습니다!</h2>
            ) : (
              <h2>
                결과: <span>{result}ms</span>
              </h2>
            )}
            <button onClick={resetGame}>다시 시작</button>
          </div>
        );
    }
  };

  return <div className="reaction-game-container">{renderContent()}</div>;
}
