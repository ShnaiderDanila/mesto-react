import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
        <div className="popup popup-profile">
          <div className="popup__container">
            <button className="popup__button-close" type="button"></button>
            <h3 className="popup__title">Редактировать профиль</h3>
            <form className="popup__form" name="edit-profile" noValidate>
              <label className="popup__form-field">
                <input id="username" className="popup__input" type="text" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
                <span id="error-username" className="popup__input-error"></span>
              </label>
              <label className="popup__form-field">
                <input id="about" className="popup__input" type="text" name="about" placeholder="Профессия" required minLength="2" maxLength="200" />
                <span id="error-about" className="popup__input-error"></span>
              </label>
              <button className="popup__button-save" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup popup-add">
          <div className="popup__container">
            <button className="popup__button-close" type="button"></button>
            <form className="popup__form" name="add-card" noValidate>
              <h3 className="popup__title">Новое место</h3>
              <label className="popup__form-field">
                <input id="place" className="popup__input" type="text" name="place" placeholder="Название" required minLength="2" maxLength="30" />
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
            <form className="popup__form" name="avatar-update" noValidate>
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
