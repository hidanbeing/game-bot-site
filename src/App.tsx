import GameCard from "./components/GameCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>TalkGames</h1>
        <p>카카오톡 그룹채팅 실시간 미니게임 챗봇</p>
      </header>

      <section className="games">
        <h2>📌 초기 제공 게임 목록</h2>

        <GameCard
          emoji="⚡"
          title="반응속도 테스트 게임"
          description="랜덤 타이밍에 등장하는 GO 버튼을 가장 빠르게 누르는 실시간 반응 속도 게임입니다."
        />

        <GameCard
          emoji="⌨️"
          title="타자연습 배틀 (타자왕)"
          description="챗봇이 제시하는 문장을 가장 빠르게 정확히 입력한 사용자가 승리하는 타자 대결 게임입니다."
        />

        <GameCard
          emoji="🎨"
          title="랜덤 컬러 찾기 게임"
          description="색 섞인 이미지를 보고 특정 색을 가장 먼저 입력하는 사용자가 승리하는 직관적인 미니게임입니다."
        />

        <GameCard
          emoji="🧩"
          title="그림 맞히기 게임"
          description="챗봇이 제시하는 간단한 도형 또는 문자 기반 그림을 빠르게 맞히는 퀴즈 게임입니다."
        />
      </section>

      <footer className="footer">
        © 2025 TalkGames — KakaoTalk MiniGame Bot
      </footer>
    </div>
  );
}

export default App;
