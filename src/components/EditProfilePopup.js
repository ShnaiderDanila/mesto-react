import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useValidation } from '../hooks/useValidation';

function EditProfilePopup({ isOpen, isLoading, onClose, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  // Использование кастомного хука useValidation, для включения валидации на инпутах попапа
  const { isValid, errorMessage, handleChangeValidation } = useValidation({});
  const currentUser = React.useContext(CurrentUserContext);

  // При открытии попапа, подставлять соответствующие данные текущего пользователя в инпуты
  React.useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    } 
  }, [isOpen, currentUser]);

  function handleChangeName(evt) {
    setName(evt.target.value)
    handleChangeValidation(evt);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value)
    handleChangeValidation(evt);
  }
  
  function handleSumbit(evt) {
    evt.preventDefault();
    onUpdateUser(name, description);
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      buttonLoadingText="Сохранение..."
      isOpen={isOpen}
      isValidForm={isValid}
      isLoading={isLoading}
      onClose={onClose}
      onSubmit={handleSumbit}>
      <>
        <label className="popup__form-field">
          <input
            id="username"
            className={`popup__input ${errorMessage.name && 'popup__input_invalid'}`}
            type="text"
            name="name"
            placeholder="Имя"
            value={name || ""}
            onChange={handleChangeName}
            required
            minLength="2"
            maxLength="40" />
          <span
            id="error-username"
            className={`popup__input-error ${errorMessage.name && 'popup__input-error_active'}`}>
            {errorMessage.name}
          </span>
        </label>
        <label className="popup__form-field">
          <input
            id="about"
            className={`popup__input ${errorMessage.about && 'popup__input_invalid'}`}
            type="text"
            name="about"
            placeholder="Профессия"
            value={description || ''}
            onChange={handleChangeDescription}
            required
            minLength="2"
            maxLength="200" />
          <span
            id="error-about"
            className={`popup__input-error ${errorMessage.about && 'popup__input-error_active'}`}>
            {errorMessage.about}
          </span>
        </label>
      </>
    </PopupWithForm>
  )
}

export default EditProfilePopup;