import "./App.css";

function App() {
  return (
    <>
      <h1>Let's play Rock, Paper, Scissors!</h1>
      <main>
        <details className="rules-container">
          <summary>Rules to the game</summary>

          <p>You will be playing against the computer.</p>
          <p>You can choose between Rock, Paper, and Scissors.</p>
          <p>The first one to three points wins.</p>

          <p>Here are the rules to getting a point in the game:</p>
          <ul>
            <li>Rock beats Scissors</li>
            <li>Scissors beats Paper</li>
            <li>Paper beats Rock</li>
          </ul>
          <p>
            If the player and computer choose the same option (Ex. Paper and
            Paper), then no one gets the point.
          </p>
        </details>

        <div className="score-container">
          <strong>
            Player Score:{" "}
            <span className="score" id="player-score">
              0
            </span>
          </strong>
          <strong>
            Computer Score:
            <span className="score" id="computer-score">
              0
            </span>
          </strong>
        </div>

        <section className="options-container">
          <h2>Choose an option:</h2>
          <div className="btn-container">
            <button id="rock-btn" className="btn">
              Rock
            </button>
            <button id="paper-btn" className="btn">
              Paper
            </button>
            <button id="scissors-btn" className="btn">
              Scissors
            </button>
          </div>
        </section>

        <div className="results-container">
          <p id="results-msg"></p>
          <p id="winner-msg"></p>
          <button className="btn" id="reset-game-btn">
            Play again?
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
