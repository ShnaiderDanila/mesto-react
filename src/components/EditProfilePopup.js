import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(()=> {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

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
      onClose={onClose}
      onSubmit={handleSumbit}>
      <>
        <label className="popup__form-field">
          <input id="username" className="popup__input" value={name || ''} onChange={handleChangeName} type="text" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
          <span id="error-username" className="popup__input-error"></span>
        </label>
        <label className="popup__form-field">
          <input id="about" className="popup__input" value={description || ''} onChange={handleChangeDescription} type="text" name="about" placeholder="Профессия" required minLength="2" maxLength="200" />
          <span id="error-about" className="popup__input-error"></span>
        </label>
      </>
    </PopupWithForm>
  )
}

export default EditProfilePopup;