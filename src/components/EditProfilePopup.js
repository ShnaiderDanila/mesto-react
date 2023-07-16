import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useValidation } from '../hooks/useValidation';

function EditProfilePopup({ isOpen, onClose, onUpdateUser}) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const {isValid, errorMessage, handleChangeValidation, resetFormValidation} = useValidation({}); 
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(evt) {
    setName(evt.target.value)
    handleChangeValidation(evt);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value)
    handleChangeValidation(evt);
  }

  React.useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [isOpen, currentUser]);

  
  function handleSumbit(e) {
    e.preventDefault();
    onUpdateUser(name, description);
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      isValidForm={isValid}
      onClose={onClose}
      onSubmit={handleSumbit}
      onResetFormValidation={resetFormValidation}>
      <>
        <label className="popup__form-field">
          <input
            id="username"
            className={`popup__input ${errorMessage.name && 'popup__input_invalid'}`}
            value={name || ""} 
            onChange={handleChangeName}
            type="text"
            name="name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40" />
          <span id="error-username" className={`popup__input-error ${errorMessage.name && 'popup__input-error_active'}`}>{errorMessage.name}</span>
        </label>
        <label className="popup__form-field">
          <input
            id="about"
            className={`popup__input ${errorMessage.about && 'popup__input_invalid'}`}
            value={description || ''} 
            onChange={handleChangeDescription}
            type="text"
            name="about"
            placeholder="Профессия"
            required
            minLength="2"
            maxLength="200" />
          <span id="error-about" className={`popup__input-error ${errorMessage.about && 'popup__input-error_active'}`}>{errorMessage.about}</span>
        </label>
      </>
    </PopupWithForm>
  )
}

export default EditProfilePopup;