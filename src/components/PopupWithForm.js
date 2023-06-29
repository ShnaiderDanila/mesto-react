function PopupWithForm(props) {
  return (
    <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
        <h3 className="popup__title">{props.title}</h3>
        <button onClick={props.onClose} className="popup__button-close" type="button"></button>
        <form className="popup__form" name={props.name} noValidate>
          {props.children}
          <button className="popup__button-save" type="submit">{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm