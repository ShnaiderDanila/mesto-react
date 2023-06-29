import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

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
    setSelectedCard(card)
  }

  function closeAllPopups() {
    isEditProfilePopupOpen && setIsEditProfilePopupOpen(false);
    isAddPlacePopupOpen && setIsAddPlacePopupOpen(false);
    isEditAvatarPopupOpen && setIsEditAvatarPopupOpen(false);
    selectedCard && setSelectedCard({name: '', link: ''});
  }

  return (
    <>
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
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          children={(
            <>
              <label className="popup__form-field">
                <input id="username" className="popup__input" type="text" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
                <span id="error-username" className="popup__input-error"></span>
              </label>
              <label className="popup__form-field">
                <input id="about" className="popup__input" type="text" name="about" placeholder="Профессия" required minLength="2" maxLength="200" />
                <span id="error-about" className="popup__input-error"></span>
              </label>
              <button className="popup__button-save" type="submit">Сохранить</button>
            </>
          )}
        />
        <PopupWithForm
          name="add"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          children={(
            <>
              <label className="popup__form-field">
                <input id="place" className="popup__input" type="text" name="place" placeholder="Название" required minLength="2" maxLength="30" />
                <span id="error-place" className="popup__input-error"></span>
              </label>
              <label className="popup__form-field">
                <input id="link" className="popup__input" type="url" name="link" placeholder="Ссылка на картинку" required />
                <span id="error-link" className="popup__input-error"></span>
              </label>
              <button className="popup__button-save" type="submit">Создать</button>
            </>
          )}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="alert"
          title="Вы уверены?"
          children={(
            <>
              <button className="popup__button-save" type="button">Да</button>
            </>
          )}
        />
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={(
            <>
              <label className="popup__form-field">
                <input id="avatar" className="popup__input" type="url" name="avatar" placeholder="Ссылка на картинку" required />
                <span id="error-avatar" className="popup__input-error"></span>
              </label>
              <button className="popup__button-save" type="submit">Сохранить</button>
            </>
          )}
        />
      </div>
    </>
  )
};

export default App;


