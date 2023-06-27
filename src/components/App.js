import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm name="profile" title="Редактировать профиль" children={(
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
        )} />
        <PopupWithForm name="add" title="Новое место" children={(
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
        )} />
        <ImagePopup/>
        <PopupWithForm name="alert" title="Вы уверены?" children={(
          <>
            <button className="popup__button-save" type="button">Да</button>
          </>
        )} />
        <PopupWithForm name="avatar" title="Обновить аватар" children={(
          <>
            <label className="popup__form-field">
              <input id="avatar" className="popup__input" type="url" name="avatar" placeholder="Ссылка на картинку" required />
              <span id="error-avatar" className="popup__input-error"></span>
            </label>
            <button className="popup__button-save" type="submit">Сохранить</button>
          </>
        )} />
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
