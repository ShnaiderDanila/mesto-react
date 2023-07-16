import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from "./ImagePopup";
import ConfirmPopup from './ConfirmPopup'
import { api } from "../utils/Api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  const [isLoadingEditProfile, setIsLoadingEditProfile] = React.useState(false);
  const [isLoadingAddPlace, setIsLoadingAddPlace] = React.useState(false);
  const [isLoadingEditAvatar, setIsLoadingEditAvatar] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });
  const [cardForDelete, setCardForDelete] = React.useState({});
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

  function handleTrashClick(card) {
    setIsConfirmPopupOpen(true);
    setCardForDelete(card);
  }

  function closeAllPopups() {
    isEditProfilePopupOpen && setIsEditProfilePopupOpen(false);
    isAddPlacePopupOpen && setIsAddPlacePopupOpen(false);
    isEditAvatarPopupOpen && setIsEditAvatarPopupOpen(false);
    isConfirmPopupOpen && setIsConfirmPopupOpen(false);
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

  function handleCardDelete() {
    // Отправляем запрос в API на удаление карточки и получаем обновлённый массив
    api.deleteCard(cardForDelete._id)
      .then(() => {
        const newCardsArray = cards.filter(currentCard => currentCard._id !== cardForDelete._id)
        setCards(newCardsArray);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }

  function handleUpdateUser(name, about) {
    // Включаем индикатор загрузки запроса
    setIsLoadingEditProfile(true)
    api.editProfile(name, about)
      .then(() => {
        setCurrentUser({ ...currentUser, name: name, about: about })
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      })
      // Выключаем индикатор загрузки запроса
      .finally(() => {
        setIsLoadingEditProfile(false)
      });
  }

  function handleUpdateAvatar(avatar) {
    // Включаем индикатор загрузки запроса
    setIsLoadingEditAvatar(true)
    api.updateAvatar(avatar)
      .then(() => {
        setCurrentUser({ ...currentUser, avatar: avatar })
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      })
      // Выключаем индикатор загрузки запроса
      .finally(() => {
        setIsLoadingEditAvatar(false)
      });
  }

  function handleAddPlaceSubmit(name, link) {
    // Включаем индикатор загрузки запроса
    setIsLoadingAddPlace(true)
    api.addCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      })
      // Выключаем индикатор загрузки запроса
      .finally(() => {
        setIsLoadingAddPlace(false)
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
          onTrashClick={handleTrashClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          isLoading={isLoadingEditProfile}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          isLoading={isLoadingAddPlace}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <ConfirmPopup
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
          onDeleteCard={handleCardDelete}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          isLoading={isLoadingEditAvatar}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
      </div>
    </CurrentUserContext.Provider>
  )
};

export default App;


