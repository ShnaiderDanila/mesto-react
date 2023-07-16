import { useState } from "react";

export function useValidation() {

  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  function handleChangeValidation(evt) {
    setErrorMessage({...errorMessage, [evt.target.name]: evt.target.validationMessage });
    setIsValid(evt.target.closest('.popup__form').checkValidity());
  }

  function resetFormValidation() {
    setIsValid(true);
    setErrorMessage({});
  }

  return {isValid, errorMessage, handleChangeValidation, resetFormValidation};

};


