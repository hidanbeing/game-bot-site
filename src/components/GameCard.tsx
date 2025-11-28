interface Props {
  title: string;
  emoji: string;
  description: string;
  onClick: () => void;
}

export default function GameCard({
  title,
  emoji,
  description,
  onClick,
}: Props) {
  return (
    <div className="game-card game-card-clickable" onClick={onClick}>
      <div className="game-title">
        <span className="emoji">{emoji}</span>
        {title}
      </div>
      <p className="game-desc">{description}</p>
    </div>
  );
}
