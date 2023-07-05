// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, resetGame} = props
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  const playAgainButton = () => {
    resetGame()
  }

  return (
    <div className="card-container">
      <div className="score-container">
        <h1 className="won-status">{gameStatus}</h1>
        <p className="won-status">{scoreLabel}</p>
        <p className="final-score">{score}/12</p>
        <button onClick={playAgainButton} type="button">
          Play Again
        </button>
      </div>
      <img className="image" alt="win or lose" src={imageUrl} />
    </div>
  )
}

export default WinOrLoseCard
