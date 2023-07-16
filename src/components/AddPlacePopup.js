import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useValidation } from "../hooks/useValidation";

function AddPlacePopup({isOpen, isLoading, onClose, onAddPlace}) {

  const [place, setPlace] = React.useState('');
  const [link, setLink] = React.useState('');
  const {isValid, errorMessage, handleChangeValidation, resetFormValidation} =  useValidation({}); 

  function handleChangePlace(evt) {
    setPlace(evt.target.value);
    handleChangeValidation(evt);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
    handleChangeValidation(evt);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(place, link)
  }

  function resetForm() {
    setPlace('');
    setLink('');
    resetFormValidation();
    onClose();
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText="Создать"
      buttonLoadingText="Создание..."
      isOpen={isOpen}
      isValidForm={isValid}
      isLoading={isLoading}
      onClose={resetForm}
      onSubmit={handleSubmit}
      onResetForm={resetForm}
      >
      <>
        <label className="popup__form-field">
          <input 
          id="place" 
          className={`popup__input ${errorMessage.place && 'popup__input_invalid'}`}
          type="text" 
          value={place || ""} 
          onChange={handleChangePlace} 
          name="place" 
          placeholder="Название" 
          required 
          minLength="2" 
          maxLength="30" />
          <span id="error-place" className={`popup__input-error ${errorMessage.place && 'popup__input-error_active'}`}>{errorMessage.place}</span>
        </label>
        <label className="popup__form-field">
          <input 
          id="link" 
          className={`popup__input ${errorMessage.link && 'popup__input_invalid'}`}
          type="url" 
          name="link" 
          value={link  || ""}
          onChange={handleChangeLink} 
          placeholder="Ссылка на картинку" 
          required />
          <span id="error-link" className={`popup__input-error ${errorMessage.link && 'popup__input-error_active'}`}>{errorMessage.link}</span>
        </label>
      </>
    </PopupWithForm>
  )
}

export default AddPlacePopup