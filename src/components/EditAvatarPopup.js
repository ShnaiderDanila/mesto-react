import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { useValidation } from "../hooks/useValidation";

function EditAvatarPopup({ isOpen, isLoading, onClose, onUpdateAvatar }) {

  const avatar = useRef();
  // Использование кастомного хука useValidation, для включения валидации на инпутах попапа
  const { isValid, errorMessage, handleChangeValidation, resetValidation } = useValidation({});

  useEffect(() => {
    if (isOpen) {
      resetForm()
    }
  }, [isOpen, resetForm]);

  function resetForm() {
    avatar.current.value = "";
    resetValidation();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar(avatar.current.value);
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
      onClose={onClose}
      onSubmit={handleSubmit}>
      <>
        <label className="popup__form-field">
          <input
            id="avatar"
            className={`popup__input ${errorMessage.avatar && 'popup__input_invalid'}`}
            type="url"
            name="avatar"
            placeholder="Ссылка на картинку"
            ref={avatar}
            onChange={handleChangeValidation}
            required />
          <span
            id="error-avatar"
            className={`popup__input-error ${errorMessage.avatar && 'popup__input-error_active'}`}>
            {errorMessage.avatar}
          </span>
        </label>
      </>
    </PopupWithForm>
  )
}

export default EditAvatarPopup