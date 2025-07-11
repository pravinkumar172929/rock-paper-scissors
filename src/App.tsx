import { useState } from "react";
import "./App.css";

const options = ["Rock", "Paper", "Scissors"];

const hasPlayerWon = (player: string, computer: string) => {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  );
};

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [lastResult, setLastResult] = useState<String>("");

  const gameOver = playerScore === 3 || computerScore === 3;
  const winnerMessage =
    playerScore === 3
      ? "Player wins hte game!"
      : computerScore === 3
      ? "Computer wins the game"
      : "";

  const checkResult = (userSelection: string) => {
    if (gameOver) {
      return;
    }

    const computerSelection =
      options[Math.floor(Math.random() * options.length)];

    if (userSelection === computerSelection) {
      setLastResult(`It is a tie. Both chose${userSelection}`);
    }

    const playerWon = hasPlayerWon(userSelection, computerSelection);

    if (playerWon) {
      setPlayerScore((preScore) => preScore + 1);
      setLastResult(`Player wins! ${userSelection} beats ${computerSelection}`);
    } else {
      setComputerScore((preScore) => preScore + 1);
      setLastResult(
        `Computer wins! ${computerSelection} beats ${userSelection}`
      );
    }
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setLastResult("");
  };

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
            Player Score:
            <span className="score" id="player-score">
              {playerScore}
            </span>
          </strong>
          <strong>
            Computer Score:
            <span className="score" id="computer-score">
              {computerScore}
            </span>
          </strong>
        </div>

        {!gameOver && (
          <section className="options-container">
            <h2>Choose an option:</h2>
            <div className="btn-container">
              {options.map((option) => (
                <button
                  key={option}
                  id={`${option}-btn`}
                  className="btn"
                  onClick={() => {
                    checkResult(option);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </section>
        )}

        {gameOver && (
          <div className="results-container">
            <p id="results-msg">{lastResult}</p>
            <p id="winner-msg">{winnerMessage}</p>
            <button
              className="btn"
              id="reset-game-btn"
              onClick={() => {
                resetGame();
              }}
            >
              Play again?
            </button>
          </div>
        )}

        {!gameOver && lastResult && (
          <p className="round-result">{lastResult}</p>
        )}
      </main>
    </>
  );
}

export default App;
