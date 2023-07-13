function PopupWithForm({isOpen, onClose, onSubmit, name, title, buttonText, children}) {
  return (
    <div className={`popup popup-${name} ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
        <h3 className="popup__title">{title}</h3>
        <button onClick={onClose} className="popup__button-close" type="button"/>
        <form onSubmit={onSubmit} className="popup__form" name={name}>
          {children}
          <button className="popup__button-save" type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm