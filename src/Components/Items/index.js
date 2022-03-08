import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const Items = props => {
  const {details, DeleteBtn} = props
  const {id, imageUrl, name, genre, duration} = details

  const onclickDelete = () => {
    DeleteBtn(id)
  }
  return (
    <li className="list-item">
      <img src={imageUrl} alt="track" className="img-url" />
      <div className="details-container">
        <div>
          <p>{name}</p>
          <p>{genre}</p>
        </div>
        <p>{duration}</p>
        <button
          type="button"
          className="delete-btn"
          testid="delete"
          onClick={onclickDelete}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default Items
