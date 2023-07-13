import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getAppInfo()
      .then(([initialCards, userInfo]) => {
        setCurrentUser(userInfo)
        setCards(initialCards)
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

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        const newCardsArray = cards.map(currentCard => currentCard._id === card._id ? newCard : currentCard)
        setCards(newCardsArray);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }

  function handleCardDelete(card) {
    // Отправляем запрос в API на удаление карточки и получаем обновлённый массив
    api.deleteCard(card._id)
      .then(() => {
        const newCardsArray = cards.filter(currentCard => currentCard._id !== card._id)
        setCards(newCardsArray);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }

  function handleUpdateUser(name, about) {
    api.editProfile(name, about)
    .then(()=> {
      setCurrentUser({...currentUser, name: name, about: about})
      closeAllPopups();
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="wrapper">
        <Header />
        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup 
         isOpen={isEditProfilePopupOpen}
         onClose={closeAllPopups}
         onUpdateUser={handleUpdateUser}
        />
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


