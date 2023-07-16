import React from "react";

export function useValidation() {

  // Стейт-переменная валидности формы 
  const [isValid, setIsValid] = React.useState(false);

  // Стейт-переменная текста ошибки валидации
  const [errorMessage, setErrorMessage] = React.useState({});

  // Функция обработки валидации при срабатывании события
  function handleChangeValidation(evt) {
    // Записываем текст ошибки события в стейт-переменную errorMessage
    setErrorMessage({...errorMessage, [evt.target.name]: evt.target.validationMessage });
    // Проверяем форму на валидность
    setIsValid(evt.target.closest('.popup__form').checkValidity());
  }

  // Функция сброса валидации
  function resetValidation() {
    setIsValid(false);
    setErrorMessage({});
  }

  return {isValid, errorMessage, handleChangeValidation, resetValidation};

};


