import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useValidation } from "../hooks/useValidation";

function EditAvatarPopup({isOpen, isLoading, onClose, onUpdateAvatar}) {
  const avatar = React.useRef();
  const {isValid, errorMessage, handleChangeValidation, resetFormValidation} =  useValidation({}); 

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatar.current.value);
  }

  function resetForm() {
    avatar.current.value = "";
    resetFormValidation();
    onClose();
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      buttonLoadingText="Сохранение..."
      isOpen={isOpen}
      isLoading={isLoading}
      isValidForm={isValid}
      onClose={resetForm}
      onSubmit={handleSubmit}
      onResetForm={resetForm}>
      <>
        <label className="popup__form-field">
          <input 
          id="avatar" 
          className={`popup__input ${errorMessage.avatar && 'popup__input_invalid'}`}
          type="url" 
          ref={avatar} 
          onChange={handleChangeValidation} 
          name="avatar" 
          placeholder="Ссылка на картинку" 
          required />
          <span id="error-avatar" className={`popup__input-error ${errorMessage.avatar && 'popup__input-error_active'}`}>{errorMessage.avatar}</span>
        </label>
      </>
    </PopupWithForm>
  )
}

export default EditAvatarPopup