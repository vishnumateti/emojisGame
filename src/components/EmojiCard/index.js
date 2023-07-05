// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmojiChanges} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickImage = () => {
    clickEmojiChanges(id)
  }

  return (
    <li className="list-container">
      <button className="emoji-button" type="button" onClick={onClickImage}>
        <img className="emoji-image" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
