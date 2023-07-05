// Write your code here.
import './index.css'

const NavBar = props => {
  const {clickedEmojisList, topScore, isGameInProgress} = props

  return (
    <nav className="nav-container">
      <div className="nav-section-container">
        <div className="logo-container">
          <img
            className="logo"
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />
          <h1 className="heading">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-container">
            <p className="score">Score: {clickedEmojisList.length}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
