import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmPopup({isOpen, onClose, onDeleteCard}) {
  
  function handleSubmit(e) {
    e.preventDefault();
    onDeleteCard();
  }

  return (
    <PopupWithForm
      name="alert"
      title="Вы уверены"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      >
    </PopupWithForm>
  )
}

export default ConfirmPopup