function Card(props) {
  function handleImageClick() {
    props.onCardClick(props.card);
  } 
   
  return (
    <li key={props.card._id} className="card">
      <img onClick={handleImageClick} className="card__image" src={props.card.link} alt={props.card.name} />
      <button className="card__delete-button" type="button"></button>
      <div className="card__description">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like">
          <button className="card__like-button" type="button"></button>
          <p className="card__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card
