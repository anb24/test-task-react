import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import data from "../vendor/db.json";
import api from "../utils/api"

import Header from "./Header";
import Footer from "./Footer";
import Popup from "./Popup";

import ArrowBtn from '../images/arrow_up-down.png';
import MoreBtn from '../images/Plus.png';
import OptionsBtn from '../images/options.png';
import DeleteBtn from '../images/delete.png';
import LeftBtn from '../images/arrow_left.png';
import RightBtn from '../images/arrow_right.png';
import ExitPopupOptions from '../images/popup/exit_btn.png';
import PlayPopupOptionsBtn from '../images/popup/btn_play.png';
import BannersPopupOptionsBtn from '../images/popup/btn_banners.png';
import SlidersPopupOptionsBtn from '../images/popup/btn_sliders.png';
import EditPopupOptionsBtn from '../images/popup/btn_edit.png';
import UsersPopupOptionsBtn from '../images/popup/btn_users.png';
import ChatPopupOptionsBtn from '../images/popup/btn_chat.png';
import {click} from "@testing-library/user-event/dist/click";


function EventsPage() {
    const [popupDeleteActive, setPopupDeleteActive] = useState(false);
    const [popupOptionsActive, setPopupOptionsActive] = useState(false);
    const [events, setEvents] = useState([]);
    const [eventId, setEventId] = useState(null);

    useEffect(() => {
        api
            .getEvents()
            .then((events) => {
                setEvents(events)
            })
            .catch((err) => {
                console.log("ОШИБКА загрузки данных: " + err);
            })
    }, [])

    function closeAllPopups() {
        setPopupDeleteActive(false);
        setPopupOptionsActive(false);
    }

    function handleDeleteEventClick(event) {
        setPopupDeleteActive(true);
        setEventId(event.id);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleEventDelete();
    }

    function handleEventDelete(event) {
        api
            .deleteEvent(eventId)
            .then(() => {
                setEvents((state) => state.filter((evt) => evt.id !== eventId));
                setPopupDeleteActive(false);
            })
            .catch((err) => {
                console.log("ОШИБКА удаления: " + err);
            })
    }

    function MoreBtnClick(event, index) {
        if(event.isActive === false) {
            setEvents(events.map((v, idx) => index === idx ? {...v, isActive: true} : v));
        } else {
            setEvents(events.map((v, idx) => index === idx ? {...v, isActive: false} : v));
        }
    }

    return (
        <div>
            <Header/>
            <main className="content">
                <div className="evt-btn"><Link className="evt-btn_link" to="/create">Создать мероприятие</Link></div>
                <div className="tbl">
                    <ul className="tbl__headers">
                        <li className="tbl__header tbl__header-number">№</li>
                        <li className="tbl__header tbl__header-title">Название<button className="tbl__header-btn"><img src={ArrowBtn} alt="Сортировка"/></button></li>
                        <li className="tbl__header tbl__header-status">Статус<button className="tbl__header-btn"><img src={ArrowBtn} alt="Сортировка"/></button></li>
                        <li className="tbl__header tbl__header-date">Начало<button className="tbl__header-btn"><img src={ArrowBtn} alt="Сортировка"/></button></li>
                        <li className="tbl__header tbl__header-lead">Ведущий<button className="tbl__header-btn"><img src={ArrowBtn} alt="Сортировка"/></button></li>
                        <li className="tbl__header tbl__header-moder">Модератор<button className="tbl__header-btn"><img src={ArrowBtn} alt="Сортировка"/></button></li>
                        <li className="tbl__header tbl__header-access">Доступ<button className="tbl__header-btn"><img src={ArrowBtn} alt="Сортировка"/></button></li>
                        <li className="tbl__header tbl__header-chat">Чат<button className="tbl__header-btn"><img src={ArrowBtn} alt="Сортировка"/></button></li>
                        <li className="tbl__header tbl__header-options">Опции<button className="tbl__header-btn"><img src={ArrowBtn} alt="Сортировка"/></button></li>
                    </ul>

                    {/*Тестовый блок*/}
                    <ul className="tbl__contents">
                        <li className="tbl__content tbl__content-number">0</li>
                        <li className="tbl__content tbl__content-title">Тест Vimeo<button className="tbl__content-title-btn" onClick={MoreBtnClick}><img src={MoreBtn} alt="Подробнее"/></button></li>
                        <li className="tbl__content tbl__content-status"><button className="tbl__content-status-btn">запланировано</button></li>
                        <li className="tbl__content tbl__content-date">14.11.2023, 23:00</li>
                        <li className="tbl__content tbl__content-lead">Попов Александр</li>
                        <li className="tbl__content tbl__content-moder">Попов Александр</li>
                        <li className="tbl__content tbl__content-access"><button className="tbl__content-access-btn">открытый</button></li>
                        <li className="tbl__content tbl__content-chat"><button className="tbl__content-chat-btn">вкл</button></li>
                        <li className="tbl__content tbl__content-options"><button className="tbl__content-options-btn" onClick={() => setPopupOptionsActive(true)}><img src={OptionsBtn} alt="Опции"/></button><button className="tbl__content-options-btn" onClick={() => setPopupDeleteActive(true)}><img src={DeleteBtn} alt="Удалить"/></button></li>
                    </ul>
                    {/*<ul className={contentDetailsActive ? "tbl__content-details tbl__content-details_active" : "tbl__content-details"}>*/}
                    {/*    <li className="tbl__content-details_elem">Ссылка на мероприятие: <a className="tbl__content-details_elem-link" href="#">https://app.inwebsale.com/moderator/#events</a></li>*/}
                    {/*    <li className="tbl__content-details_elem">YouTube трансляция: <a className="tbl__content-details_elem-link"></a></li>*/}
                    {/*    <li className="tbl__content-details_elem">Заглушка: <a className="tbl__content-details_elem-link"></a></li>*/}
                    {/*    <li className="tbl__content-details_elem">Кликабельные ссылки от пользователей: <a className="tbl__content-details_elem-link"></a></li>*/}
                    {/*</ul>*/}

                    <div className="box">
                        {events.map((event, i) => {
                            return (
                                <div key={event.id}>
                                    <ul className="tbl__contents">
                                        <li className="tbl__content tbl__content-number">{event.id}</li>
                                        <li className="tbl__content tbl__content-title">{event.name}<button className="tbl__content-title-btn" onClick={() => MoreBtnClick(event, i)}><img src={MoreBtn} alt="Подробнее"/></button></li>
                                        <li className="tbl__content tbl__content-status"><button className="tbl__content-status-btn">запланировано</button></li>
                                        <li className="tbl__content tbl__content-date">{event.date}, {event.time}</li>
                                        <li className="tbl__content tbl__content-lead">{event.lead}</li>
                                        <li className="tbl__content tbl__content-moder">Попов Александр</li>
                                        <li className="tbl__content tbl__content-access"><button className="tbl__content-access-btn">{event.access}</button></li>
                                        <li className="tbl__content tbl__content-chat"><button className="tbl__content-chat-btn">{event.chat}</button></li>
                                        <li className="tbl__content tbl__content-options"><button className="tbl__content-options-btn" onClick={() => setPopupOptionsActive(true)}><img src={OptionsBtn} alt="Опции"/></button><button className="tbl__content-options-btn" onClick={handleDeleteEventClick}><img src={DeleteBtn} alt="Удалить"/></button></li>
                                    </ul>
                                    <ul className={event.isActive? "tbl__content-details" : "tbl__content-details tbl__content-details_active" }>
                                        <li className="tbl__content-details_elem">Ссылка на мероприятие: <a className="tbl__content-details_elem-link" href="#">https://app.inwebsale.com/moderator/#events</a></li>
                                        <li className="tbl__content-details_elem">YouTube трансляция: <a className="tbl__content-details_elem-link" href="#">{event.more.link_youtube}</a></li>
                                        <li className="tbl__content-details_elem">Заглушка: <a className="tbl__content-details_elem-link" href="#">{event.more.link_stub}</a></li>
                                        <li className="tbl__content-details_elem">Кликабельные ссылки от пользователей: <a className="tbl__content-details_elem-link" href="#">{event.more.link_users}</a></li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>

                    <ul className="tbl__footers">
                        <li className="tbl__footer-pages">Показано 1-8 из 72 результатов</li>
                        <li className="tbl__footer-btns">
                            <button className="tbl__footer-btn"><img src={LeftBtn} alt="Влево"/></button>
                            <button className="tbl__footer-btn">1</button>
                            <button className="tbl__footer-btn">2</button>
                            <button className="tbl__footer-btn">3</button>
                            <button className="tbl__footer-btn">...</button>
                            <button className="tbl__footer-btn">9</button>
                            <button className="tbl__footer-btn"><img src={RightBtn} alt="Вправо"/></button>
                        </li>
                    </ul>
                </div>

                {/*<table className="tbl">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th className="tbl__name">№</th>*/}
                {/*        <th className="tbl__name">Название<button className="tbl__name-btn"><img src={ArrowBtn} alt="Сортировка"/></button></th>*/}
                {/*        <th className="tbl__name">Статус<button className="tbl__name-btn"><img src={ArrowBtn} alt="Сортировка"/></button></th>*/}
                {/*        <th className="tbl__name">Начало<button className="tbl__name-btn"><img src={ArrowBtn} alt="Сортировка"/></button></th>*/}
                {/*        <th className="tbl__name">Ведущий<button className="tbl__name-btn"><img src={ArrowBtn} alt="Сортировка"/></button></th>*/}
                {/*        <th className="tbl__name">Модератор<button className="tbl__name-btn"><img src={ArrowBtn} alt="Сортировка"/></button></th>*/}
                {/*        <th className="tbl__name">Доступ<button className="tbl__name-btn"><img src={ArrowBtn} alt="Сортировка"/></button></th>*/}
                {/*        <th className="tbl__name">Чат<button className="tbl__name-btn"><img src={ArrowBtn} alt="Сортировка"/></button></th>*/}
                {/*        <th className="tbl__name">Опции<button className="tbl__name-btn"><img src={ArrowBtn} alt="Сортировка"/></button></th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>*/}
                {/*    <tr>*/}
                {/*        <td className="tbl__value">1</td>*/}
                {/*        <td className="tbl__value">Тест Vimeo<button className="tbl__value-name-btn"><img src={MoreBtn} alt="Подробнее"/></button></td>*/}
                {/*        <td className="tbl__value"><button className="tbl__value-status-btn">запланировано</button></td>*/}
                {/*        <td className="tbl__value">14.11.2023, 23:00</td>*/}
                {/*        <td className="tbl__value">Иван</td>*/}
                {/*        <td className="tbl__value">Попов Александр</td>*/}
                {/*        <td className="tbl__value"><button className="tbl__value-status-btn">открытый</button></td>*/}
                {/*        <td className="tbl__value"><button className="tbl__value-status-btn">вкл</button></td>*/}
                {/*        <td className="tbl__value"><button className="tbl__value-options"><img src={OptionsBtn} alt="Опции"/></button><button className="tbl__value-options"><img src={DeleteBtn} alt="Удалить"/></button></td>*/}
                {/*    </tr>*/}
                {/*    </tbody>*/}
                {/*    <tfoot>*/}
                {/*    <tr>*/}
                {/*        <td className="tbl__footer-pages" colSpan="2">Показано 1-8 из 72 результатов</td>*/}
                {/*        <td className="tbl__footer-btns" colSpan="7">*/}
                {/*            <button className="tbl__footer-btn"><img src={LeftBtn} alt="Влево"/></button>*/}
                {/*            <button className="tbl__footer-btn">1</button>*/}
                {/*            <button className="tbl__footer-btn">2</button>*/}
                {/*            <button className="tbl__footer-btn">3</button>*/}
                {/*            <button className="tbl__footer-btn">...</button>*/}
                {/*            <button className="tbl__footer-btn">9</button>*/}
                {/*            <button className="tbl__footer-btn"><img src={RightBtn} alt="Вправо"/></button></td>*/}
                {/*    </tr>*/}
                {/*    </tfoot>*/}
                {/*</table>*/}

            </main>
            <Footer/>
            <Popup active={popupOptionsActive} setActive={setPopupOptionsActive}>
                <div className="popup__options">
                    <button className="popup__options_exit-btn" onClick={closeAllPopups}><img src={ExitPopupOptions} alt="Выход"/></button>
                    <div className="popup__options-box">
                        <button className="popup__options_group-btn"><img className="popup__options_group-btn-img" src={PlayPopupOptionsBtn} alt=""/>Кнопки</button>
                        <button className="popup__options_group-btn"><img className="popup__options_group-btn-img" src={BannersPopupOptionsBtn} alt=""/>Баннеры</button>
                        <button className="popup__options_group-btn"><img className="popup__options_group-btn-img" src={SlidersPopupOptionsBtn} alt=""/>Слайдеры</button>
                        <button className="popup__options_group-btn"><img className="popup__options_group-btn-img" src={EditPopupOptionsBtn} alt=""/>Изменить</button>
                        <button className="popup__options_group-btn"><img className="popup__options_group-btn-img" src={UsersPopupOptionsBtn} alt=""/>Пользователи</button>
                        <button className="popup__options_group-btn"><img className="popup__options_group-btn-img" src={ChatPopupOptionsBtn} alt=""/>Сообщения</button>
                    </div>
                </div>
            </Popup>
            <Popup active={popupDeleteActive} setActive={setPopupDeleteActive}>
                <div className="popup__delete">
                    <p className="popup__delete_text">Вы действительно хотите удалить мероприятие?</p>
                    <button className="popup__delete_yes-btn" onClick={handleSubmit}>Да</button>
                    <button className="popup__delete_no-btn" onClick={closeAllPopups}>Отмена</button>
                </div>
            </Popup>
        </div>
    )
}

export default EventsPage;
