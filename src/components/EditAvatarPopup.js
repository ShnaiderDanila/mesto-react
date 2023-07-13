import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatar = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatar.current.value);
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <>
        <label className="popup__form-field">
          <input id="avatar" className="popup__input" type="url" ref={avatar} name="avatar" placeholder="Ссылка на картинку" required />
          <span id="error-avatar" className="popup__input-error"></span>
        </label>
      </>
    </PopupWithForm>
  )
}

export default EditAvatarPopup