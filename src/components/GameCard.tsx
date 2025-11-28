interface Props {
  title: string;
  emoji: string;
  description: string;
}

export default function GameCard({ title, emoji, description }: Props) {
  return (
    <div className="game-card">
      <div className="game-title">
        <span className="emoji">{emoji}</span>
        {title}
      </div>
      <p className="game-desc">{description}</p>
    </div>
  );
}
