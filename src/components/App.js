import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
    .then((res) => {
      setCurrentUser(res)
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    });
  }, [])



  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({ name: card.name, link: card.link })
  }

  function closeAllPopups() {
    isEditProfilePopupOpen && setIsEditProfilePopupOpen(false);
    isAddPlacePopupOpen && setIsAddPlacePopupOpen(false);
    isEditAvatarPopupOpen && setIsEditAvatarPopupOpen(false);
    selectedCard && setSelectedCard({ name: '', link: '' });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="wrapper">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
          <>
            <label className="popup__form-field">
              <input id="username" className="popup__input" type="text" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
              <span id="error-username" className="popup__input-error"></span>
            </label>
            <label className="popup__form-field">
              <input id="about" className="popup__input" type="text" name="about" placeholder="Профессия" required minLength="2" maxLength="200" />
              <span id="error-about" className="popup__input-error"></span>
            </label>
          </>
        </PopupWithForm>
        <PopupWithForm
          name="add"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
          <>
            <label className="popup__form-field">
              <input id="place" className="popup__input" type="text" name="place" placeholder="Название" required minLength="2" maxLength="30" />
              <span id="error-place" className="popup__input-error"></span>
            </label>
            <label className="popup__form-field">
              <input id="link" className="popup__input" type="url" name="link" placeholder="Ссылка на картинку" required />
              <span id="error-link" className="popup__input-error"></span>
            </label>
          </>
        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="alert"
          title="Вы уверены?"
          buttonText="Да">
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
          <>
            <label className="popup__form-field">
              <input id="avatar" className="popup__input" type="url" name="avatar" placeholder="Ссылка на картинку" required />
              <span id="error-avatar" className="popup__input-error"></span>
            </label>
          </>
        </PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  )
};

export default App;


