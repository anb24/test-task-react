import Header from "./Header";
import Footer from "./Footer";

import DownloadBtn from "../images/download.png";

function CreatePage() {

    return (
        <div>
            <Header/>
            <main className="content">
                <section className="form">
                    <h2 className="form__title">Создание мероприятия</h2>
                    <div className="form__container">
                        <div className="form__container-elem">
                            <label className="form__label" for="heading">Название мероприятия</label>
                            <input className="form__item form__item_el_heading" id="heading" name="heading" placeholder="Введите название" required/>
                            <label className="form__label" for="lead-name">Имя ведущего</label>
                            <input className="form__item form__item_el_lead-name" id="lead-name" name="lead-name" placeholder="Введите имя" required/>
                            <label className="form__label" htmlFor="date">Дата и время начала</label>
                            <div className="form__date-box">
                                <input className="form__item form__item_el_date" type="date" id="date" name="date"/>
                                <input className="form__item form__item_el_time" type="time" id="time" name="time"/>
                            </div>
                            <label className="form__label" htmlFor="youtube-link">Ссылка на YouTube трансляцию</label>
                            <input className="form__item form__item_el_youtube-link" id="youtube-link" name="youtube-link" placeholder="Вставьте ссылку" required/>
                            <label className="form__label" htmlFor="stub-link">Ссылка на заглушку</label>
                            <input className="form__item form__item_el_stub-link" id="stub-link" name="stub-link" placeholder="Вставьте ссылку" required/>
                            <label className="form__label" htmlFor="link-btn">Внешняя кнопка (ссылка)</label>
                            <input className="form__item form__item_el_link-btn" id="link-btn" name="link-btn" placeholder="Вставьте ссылку" required/>
                        </div>

                        <div className="form__container-elem">
                            <fieldset className="form__access">
                                <p className="form__access-title">Доступ к мероприятию:</p>
                                <label className="form__label form__access-password" htmlFor="access-password">
                                    <input className="form__item form__item_el_access-password" type="radio" name="access" id="access-password" value="access-password" checked/>
                                        <span className="form__label-text">По паролям</span>
                                </label>
                                <label className="form__label form__access-password" htmlFor="access-free">
                                    <input className="form__item form__item_el_access-password" type="radio" name="access" id="access-free" value="access-free"/>
                                    <span className="form__label-text">Открытый</span>
                                </label>
                            </fieldset>
                            <fieldset className="form__options">
                                <div className="form__label form__options_element">
                                    <span className="form__label-text">Чат при запуске мероприятия</span>
                                    <input className="form__item form__item_el_options" type="checkbox" name="option-chat" id="option-chat"/>
                                    <label className="form__pseudo-item_type_checkbox" htmlFor="option-chat"/>
                                </div>
                                <div className="form__label form__options_element">
                                    <span className="form__label-text">Кликабельные ссылки от<br/>пользователей в чате</span>
                                    <input className="form__item form__item_el_options" type="checkbox" name="option-links" id="option-links"/>
                                    <label className="form__pseudo-item_type_checkbox" htmlFor="option-links"/>
                                </div>
                                <div className="form__label form__options_element">
                                    <span className="form__label-text">Корзина</span>
                                    <input className="form__item form__item_el_options" type="checkbox" name="option-basket" id="option-basket"/>
                                    <label className="form__pseudo-item_type_checkbox" htmlFor="option-basket"/>
                                </div>
                            </fieldset>
                            <p className="form__pdf">Презентация:</p>
                            <button className="form__pdf-btn">Загрузить PDF<img className="form__pdf-btn-img" src={DownloadBtn}/></button>
                            <fieldset className="form__adding">
                                <p className="form__adding-title">Дополнительные обязательные поля при входе:</p>
                                <label className="form__label form__adding-surname" htmlFor="adding-surname" for="adding-surname">
                                    <input className="form__item form__item_el_adding" type="checkbox" name="adding" id="adding-surname" value="surname"/>
                                    <span className="form__pseudo-item form__pseudo-item_type_checkbox"></span>
                                    <span className="form__label-text form__label_el_adding-text">Фамилия</span>
                                </label>
                                <label className="form__label form__adding-surname" htmlFor="adding-surname" for="adding-city">
                                    <input className="form__item form__item_el_adding" type="checkbox" name="adding" id="adding-city" value="city"/>
                                    <span className="form__pseudo-item form__pseudo-item_type_checkbox"></span>
                                    <span className="form__label-text form__label_el_adding-text">Город</span>
                                </label>
                                <label className="form__label form__adding-element" htmlFor="adding-surname" for="adding-email">
                                    <input className="form__item form__item_el_adding" type="checkbox" name="adding" id="adding-email" value="email"/>
                                    <span className="form__pseudo-item form__pseudo-item_type_checkbox"></span>
                                    <span className="form__label-text form__label_el_adding-text">Email</span>
                                </label>
                            </fieldset>

                        </div>
                    </div>
                    <button className="form__save-btn">Сохранить</button>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default CreatePage;
