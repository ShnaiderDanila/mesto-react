function ImagePopup(props) {
  return (
    <div className={`popup popup-picture ${props.card ? 'popup_is-opened' : ''}`}>
      <figure className="popup__figure">
        <button onClick={props.onClose} className="popup__button-close" type="button"></button>
        <img className="popup__big-image" src={props.card.link} alt={props.card.name}/>
        <figcaption className="popup__figcaption">{props.card.name}</figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup