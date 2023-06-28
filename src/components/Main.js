import React from "react";
import { api } from "../utils/Api.js";

function Main(props) {
  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    api.getAppInfo().then(([initialCards, userInfo]) => {
      setUserName(userInfo.name);
      setUserDescription(userInfo.about);
      setUserAvatar(userInfo.avatar);
      setCards([...cards, ...initialCards])
    })
  }, [])

  return (
    <main className="main">
      <section className="profile">
        <button onClick={props.onEditAvatar} className="profile__avatar-button" type="button">
          <img className="profile__avatar-image" alt="Аватарка пользователя" src={userAvatar} />
          <div className="profile__avatar-overlay"></div>
        </button>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button onClick={props.onEditProfile} className="profile__button-edit" type="button"></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button onClick={props.onAddPlace} className="profile__button-add" type="button"></button>
      </section>
      <section className="gallery">
        <ul className="gallery__list">
          {cards.map(card => {
            return (
            <li key={card._id} className="card">
              <img className="card__image" src={card.link} />
              <button className="card__delete-button" type="button"></button>
              <div className="card__description">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like">
                  <button className="card__like-button" type="button"></button>
                  <p className="card__like-count">{card.likes.length}</p>
                </div>
              </div>
            </li>
          )})}  
        </ul>
      </section>
    </main>
  )
}

export default Main;