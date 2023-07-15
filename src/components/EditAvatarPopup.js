import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, onValidationInput}) {
  const avatar = React.useRef();
  const [avatarValidation, setAvatarValidation] = React.useState(true);
  const [avatarValidationMessage, setAvatarValidationMessage] = React.useState('');

  function handleChangeAvatar(event) {
    onValidationInput(event, setAvatarValidation);
    setAvatarValidationMessage(event.target.validationMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatar.current.value);
  }

  function resetForm() {
    avatar.current.value = "";
    setAvatarValidation(true);
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValidForm={avatarValidation}
      onResetForm={resetForm}>
      <>
        <label className="popup__form-field">
          <input 
          id="avatar" 
          className={`popup__input ${!avatarValidation && 'popup__input_invalid'}`}
          type="url" 
          ref={avatar} 
          onChange={handleChangeAvatar} 
          name="avatar" 
          placeholder="Ссылка на картинку" 
          required />
          <span id="error-avatar" className={`popup__input-error ${!avatarValidation && 'popup__input-error_active'}`}>{avatarValidationMessage}</span>
        </label>
      </>
    </PopupWithForm>
  )
}

export default EditAvatarPopup