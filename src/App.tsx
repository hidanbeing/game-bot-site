import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>톡게임즈 (TalkGames)</h1>
        <p>카카오톡 그룹채팅에서 즐기는 실시간 미니게임 챗봇</p>
      </header>

      <section className="game-section">
        <h2>📌 초기 제공 게임 목록</h2>

        <div className="game-card">
          <h3>⚡ 1) 반응속도 테스트 게임</h3>
          <p>
            랜덤 타이밍에 등장하는 ‘GO’ 버튼을 가장 빠르게 누른 사용자를
            실시간으로 측정하여 순위를 발표하는 반응 기반 게임입니다.
          </p>
        </div>

        <div className="game-card">
          <h3>⌨️ 2) 타자연습 배틀 (타자왕 게임)</h3>
          <p>
            챗봇이 제시한 중급 이상의 문장을 가장 빠르고 정확하게 입력한
            사용자가 이기는 타자 경쟁 게임으로, 그룹 채팅 참여자 모두가 동시에
            즐길 수 있습니다.
          </p>
        </div>

        <div className="game-card">
          <h3>🎨 3) 랜덤 컬러 찾기 게임</h3>
          <p>
            챗봇이 제공하는 색상이 섞인 이미지를 보고, 특정 색을 가장 먼저
            입력하는 사용자가 승리하는 직관적이고 빠른 게임입니다.
          </p>
        </div>

        <div className="game-card">
          <h3>🧩 4) 그림 맞히기 게임</h3>
          <p>
            챗봇이 간단한 도형 또는 문자 기반 그림을 제시하며, 이를 가장 먼저
            맞힌 사용자가 승리하는 퀴즈형 미니게임입니다.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 TalkGames. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
