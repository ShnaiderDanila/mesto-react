import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

  const [place, setPlace] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangePlace(event) {
    setPlace(event.target.value);
  }

  function handleChangeLink(event) {
    setLink(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(place, link)
  }
  
  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      >
      <>
        <label className="popup__form-field">
          <input id="place" className="popup__input" type="text" value={place || ""} onChange={handleChangePlace} name="place" placeholder="Название" required minLength="2" maxLength="30" />
          <span id="error-place" className="popup__input-error"></span>
        </label>
        <label className="popup__form-field">
          <input id="link" className="popup__input" type="url" name="link" value={link  || ""} onChange={handleChangeLink} placeholder="Ссылка на картинку" required />
          <span id="error-link" className="popup__input-error"></span>
        </label>
      </>
    </PopupWithForm>
  )
}

export default AddPlacePopup