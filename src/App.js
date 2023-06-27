import logo from './images/logo.svg';

function App() {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <img className="header__logo" src={logo} alt="Логотип проекта - Место Россия" />
        </header>
        <main className="main">
          <section className="profile">
            <button className="profile__avatar-button" type="button">
              <img className="profile__avatar-image" alt="Аватарка пользователя" />
              <div className="profile__avatar-overlay"></div>
            </button>
            <div className="profile__info">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button className="profile__button-edit" type="button"></button>
              <p className="profile__subtitle">Исследователь океана</p>
            </div>
            <button className="profile__button-add" type="button"></button>
          </section>
          <section className="gallery">
            <ul className="gallery__list"></ul>
          </section>
        </main>
        <footer className="footer">
          <p className="footer__copyright">© 2023 Mesto Russia</p>
        </footer>
        <div className="popup popup-profile">
          <div className="popup__container">
            <button className="popup__button-close" type="button"></button>
            <h3 className="popup__title">Редактировать профиль</h3>
            <form className="popup__form" name="edit-profile" novalidate>
              <label className="popup__form-field">
                <input id="username" className="popup__input" type="text" name="name" placeholder="Имя" required minlength="2" maxlength="40" />
                <span id="error-username" className="popup__input-error"></span>
              </label>
              <label className="popup__form-field">
                <input id="about" className="popup__input" type="text" name="about" placeholder="Профессия" required minlength="2" maxlength="200" />
                <span id="error-about" className="popup__input-error"></span>
              </label>
              <button className="popup__button-save" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup popup-add">
          <div className="popup__container">
            <button className="popup__button-close" type="button"></button>
            <form className="popup__form" name="add-card" novalidate>
              <h3 className="popup__title">Новое место</h3>
              <label className="popup__form-field">
                <input id="place" className="popup__input" type="text" name="place" placeholder="Название" required minlength="2" maxlength="30" />
                <span id="error-place" className="popup__input-error"></span>
              </label>
              <label className="popup__form-field">
                <input id="link" className="popup__input" type="url" name="link" placeholder="Ссылка на картинку" required />
                <span id="error-link" className="popup__input-error"></span>
              </label>
              <button className="popup__button-save" type="submit">Создать</button>
            </form>
          </div>
        </div>
        <div className="popup popup-picture">
          <figure className="popup__figure">
            <button className="popup__button-close" type="button"></button>
            <img className="popup__big-image" />
            <figcaption className="popup__figcaption"></figcaption>
          </figure>
        </div>
        <div className="popup popup-alert">
          <div className="popup__container">
            <button className="popup__button-close" type="button"></button>
            <p className="popup__alert-text popup__title">Вы уверены?</p>
            <button className="popup__button-save" type="button">Да</button>
          </div>
        </div>
        <div className="popup popup-avatar">
          <div className="popup__container">
            <button className="popup__button-close" type="button"></button>
            <h3 className="popup__title">Обновить аватар</h3>
            <form className="popup__form" name="avatar-update" novalidate>
              <label className="popup__form-field">
                <input id="avatar" className="popup__input" type="url" name="avatar" placeholder="Ссылка на картинку" required />
                <span id="error-avatar" className="popup__input-error"></span>
              </label>
            <button className="popup__button-save" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
      </div>
      <template id="card-template">
        <li className="card">
          <img className="card__image" />
          <button className="card__delete-button" type="button"></button>
          <div className="card__description">
            <h2 className="card__title"></h2>
            <div className="card__like">
              <button className="card__like-button" type="button"></button>
              <p className="card__like-count"></p>
            </div>
          </div>
        </li>
      </template>
    </>
  )
};

export default App;
