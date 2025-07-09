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

const getRandomComputerResult = () => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

function App() {
  const [playerSelection, setPlayerSelection] = useState("");
  const [computerSelection, setComputerSelection] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [resultMessage, setResultMessage] = useState("");
  const [winnerMessage, setWinnerMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  console.log(computerScore);

  const checkResult = (userSelection: string) => {
    if (gameOver) {
      return;
    }

    setPlayerSelection(userSelection);
    const computerChoice = getRandomComputerResult();
    setComputerSelection(computerChoice);

    if (userSelection === computerChoice) {
      setResultMessage(`It's a tie! Both chose ${userSelection}`);
      return;
    }

    const outcome = hasPlayerWon(playerSelection, computerChoice);

    if (outcome) {
      const newPlayerScore = playerScore + 1;
      setPlayerScore(newPlayerScore);
      setResultMessage(
        `Player won! ${playerSelection} beats ${computerSelection}`
      );
      if (newPlayerScore === 3) {
        setGameOver(true);
        setWinnerMessage("Player wins hte game!");
      }
    } else {
      const newComputerScore = computerScore + 1;
      setComputerScore(newComputerScore);
      setResultMessage(
        `Computer won! ${computerSelection} beats ${playerSelection}`
      );
      if (newComputerScore === 3) {
        setGameOver(true);
        setWinnerMessage("Computer wins the game");
      }
    }
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setPlayerSelection("");
    setComputerSelection("");
    setResultMessage("");
    setWinnerMessage("");
    setGameOver(false);
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
                  id="rock-btn"
                  className="btn"
                  key={option}
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
            <p id="results-msg">{resultMessage}</p>
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
      </main>
    </>
  );
}

export default App;
