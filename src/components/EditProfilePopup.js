import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, onValidationInput}) {

  const [name, setName] = React.useState('');
  const [nameValidation, setNameValidation] = React.useState(true);
  const [nameValidationMessage, setNameValidationMessage] = React.useState('');
  
  const [description, setDescription] = React.useState('');
  const [descriptionValidation, setDescriptionValidation] = React.useState(true);
  const [descriptionValidationMessage, setDescriptionValidationMessage] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [isOpen, currentUser]);

  const isValid = nameValidation && descriptionValidation;

  function handleChangeName(event) {
    onValidationInput(event, setNameValidation);
    setName(event.target.value);
    setNameValidationMessage(event.target.validationMessage);
  }

  function handleChangeDescription(event) {
    onValidationInput(event, setDescriptionValidation);
    setDescription(event.target.value);
    setDescriptionValidationMessage(event.target.validationMessage);
  }

  function handleSumbit(e) {
    e.preventDefault();
    onUpdateUser(name, description);
  }

  function resetForm() {
    setName('');
    setDescription('');
    setNameValidation(true);
    setDescriptionValidation(true);
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSumbit}
      isValidForm={isValid}
      onResetForm={resetForm}
      >
      <>
        <label className="popup__form-field">
          <input
            id="username"
            className={`popup__input ${!nameValidation && 'popup__input_invalid'}`}
            value={name || ''}
            onChange={handleChangeName}
            type="text"
            name="name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40" />
          <span id="error-username" className={`popup__input-error ${!nameValidation && 'popup__input-error_active'}`}>{nameValidationMessage}</span>
        </label>
        <label className="popup__form-field">
          <input
            id="about"
            className={`popup__input ${!descriptionValidation && 'popup__input_invalid'}`}
            value={description || ''} 
            onChange={handleChangeDescription}
            type="text"
            name="about"
            placeholder="Профессия"
            required
            minLength="2"
            maxLength="200" />
          <span id="error-about" className={`popup__input-error ${!descriptionValidation && 'popup__input-error_active'}`}>{descriptionValidationMessage}</span>
        </label>
      </>
    </PopupWithForm>
  )
}

export default EditProfilePopup;