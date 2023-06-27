
function Main() {
  return (
    <main className="main">
      <section className="profile">
        <button onClick={handleEditAvatarClick} className="profile__avatar-button" type="button">
          <img className="profile__avatar-image" alt="Аватарка пользователя" />
          <div className="profile__avatar-overlay"></div>
        </button>
        <div className="profile__info">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button onClick={handleEditProfileClick} className="profile__button-edit" type="button"></button>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button onClick={handleAddPlaceClick}className="profile__button-add" type="button"></button>
      </section>
      <section className="gallery">
        <ul className="gallery__list"></ul>
      </section>
    </main>
  )
}

function handleEditAvatarClick() {
  document.querySelector('.popup-avatar').classList.add('popup_is-opened');
}

function handleEditProfileClick() {
  document.querySelector('.popup-profile').classList.add('popup_is-opened');
}

function handleAddPlaceClick() {
  document.querySelector('.popup-add').classList.add('popup_is-opened');
}

export default Main;