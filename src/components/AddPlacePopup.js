import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace, onValidationInput}) {

  const [place, setPlace] = React.useState('');
  const [placeValidation, setPlaceValidation] = React.useState(true);
  const [placeValidationMessage, setPlaceValidationMessage] = React.useState('');

  const [link, setLink] = React.useState('');
  const [linkValidation, setLinkValidation] = React.useState(true);
  const [linkValidationMessage, setLinkValidationMessage] = React.useState('');

  const isValid = placeValidation && linkValidation;
  
  function handleChangePlace(event) {
    onValidationInput(event, setPlaceValidation)
    setPlace(event.target.value);
    setPlaceValidationMessage(event.target.validationMessage);
  }

  function handleChangeLink(event) {
    onValidationInput(event, setLinkValidation)
    setLink(event.target.value);
    setLinkValidationMessage(event.target.validationMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(place, link)
  }

  function resetForm() {
    setPlace('');
    setLink('');
    setPlaceValidation(true);
    setLinkValidation(true);
  }
  
  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValidForm={isValid}
      onResetForm={resetForm}
      >
      <>
        <label className="popup__form-field">
          <input 
          id="place" 
          className={`popup__input ${!placeValidation && 'popup__input_invalid'}`}
          type="text" 
          value={place || ""} 
          onChange={handleChangePlace} 
          name="place" 
          placeholder="Название" 
          required 
          minLength="2" 
          maxLength="30" />
          <span id="error-place" className={`popup__input-error ${!placeValidation && 'popup__input-error_active'}`}>{placeValidationMessage}</span>
        </label>
        <label className="popup__form-field">
          <input 
          id="link" 
          className={`popup__input ${!linkValidation && 'popup__input_invalid'}`}
          type="url" 
          name="link" 
          value={link  || ""}
          onChange={handleChangeLink} 
          placeholder="Ссылка на картинку" 
          required />
          <span id="error-link" className={`popup__input-error ${!linkValidation && 'popup__input-error_active'}`}>{linkValidationMessage}</span>
        </label>
      </>
    </PopupWithForm>
  )
}

export default AddPlacePopup