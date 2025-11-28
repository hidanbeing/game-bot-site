import "./GameModal.css";
import ReactionSpeedGame from "../games/ReactionSpeedGame";
import "../games/ReactionSpeedGame.css";
import TypingBattleGame from "../games/TypingBattleGame";
import "../games/TypingBattleGame.css";
import PictureQuizGame from "../games/PictureQuizGame";
import "../games/PictureQuizGame.css";
import ColorMatchGame from "../games/ColorMatchGame";
import "../games/ColorMatchGame.css";

interface Game {
  title: string;
  emoji: string;
  description: string;
  gameId: string; // To identify which game to render
}

interface Props {
  game: Game | null;
  onClose: () => void;
}

const renderGame = (game: Game) => {
  switch (game.gameId) {
    case "reaction-speed":
      return <ReactionSpeedGame />;
    case "typing-battle":
      return <TypingBattleGame />;
    case "picture-quiz":
      return <PictureQuizGame />;
    case "color-match":
      return <ColorMatchGame />;
    default:
      return <p>게임을 불러올 수 없습니다.</p>;
  }
};

export default function GameModal({ game, onClose }: Props) {
  if (!game) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>
            <span className="emoji">{game.emoji}</span> {game.title}
          </h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>{game.description}</p>
          <div className="game-container">{renderGame(game)}</div>
        </div>
        <div className="modal-footer">
          <button className="cta-button">카카오 채널에서 챗봇 추가하기</button>
        </div>
      </div>
    </div>
  );
}
