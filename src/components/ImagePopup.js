function ImagePopup() {
  return (
    <div className="popup popup-picture">
      <figure className="popup__figure">
        <button className="popup__button-close" type="button"></button>
        <img className="popup__big-image" />
        <figcaption className="popup__figcaption"></figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup