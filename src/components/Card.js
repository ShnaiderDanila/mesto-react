import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({card, onCardClick}) {

  const {_id} = React.useContext(CurrentUserContext);
  
  function handleImageClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <img onClick={handleImageClick} className="card__image" src={card.link} alt={card.name} />
      <button className="card__delete-button" type="button"></button>
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button className="card__like-button" type="button"></button>
          <p className="card__like-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card
