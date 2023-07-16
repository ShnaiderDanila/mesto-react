function PopupWithForm({isOpen, isValidForm, onClose, onSubmit, onResetFormValidation, name, title, buttonText, children}) {

  function closePopupWithForm() {
    onResetFormValidation();
    onClose();
  }

  return (
    <div className={`popup popup-${name} ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
        <h3 className="popup__title">{title}</h3>
        <button onClick={closePopupWithForm} className="popup__button-close" type="button"/>
        <form onSubmit={onSubmit} className="popup__form" name={name} noValidate>
          {children}
          {!isValidForm
          ? <button className='popup__button-save popup__button-save_invalid' disabled type="submit">{buttonText}</button> 
          : <button className='popup__button-save' type="submit">{buttonText}</button>}
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm