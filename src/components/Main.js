import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [cards, setCards] = React.useState([]);
  const {name, about, avatar} = React.useContext(CurrentUserContext)
  
  React.useEffect(() => {
    api.getInitialCards()
    .then((initialCards) => {
      setCards([...initialCards])
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    });
  }, [])

  return (
    <main className="main">
      <section className="profile">
        <button onClick={onEditAvatar} className="profile__avatar-button" type="button">
          <img className="profile__avatar-image" alt="Аватарка пользователя" src={avatar} />
          <div className="profile__avatar-overlay"></div>
        </button>
        <div className="profile__info">
          <h1 className="profile__title">{name}</h1>
          <button onClick={onEditProfile} className="profile__button-edit" type="button"></button>
          <p className="profile__subtitle">{about}</p>
        </div>
        <button onClick={onAddPlace} className="profile__button-add" type="button"></button>
      </section>
      <section className="gallery">
        <ul className="gallery__list">
          {cards.map((card) => (
             <Card onCardClick={onCardClick} key={card._id} card={card}/>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;