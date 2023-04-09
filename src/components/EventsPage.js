import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import api from "../utils/api"

import Header from "./Header";
import Footer from "./Footer";
import Pagination from "./Pagination";
import Popup from "./Popup";

import {ArrowBtn, OptionsBtn, DeleteBtn, ExitPopupOptions, PlayPopupOptionsBtn, BannersPopupOptionsBtn, SlidersPopupOptionsBtn, EditPopupOptionsBtn, UsersPopupOptionsBtn, ChatPopupOptionsBtn} from "../config/links";

function EventsPage() {
    const [events, setEvents] = useState([]);
    const [popupDeleteActive, setPopupDeleteActive] = useState(false);
    const [popupOptionsActive, setPopupOptionsActive] = useState(false);
    const [eventId, setEventId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [evtPerPage] = useState(8);

    const lastEvtIndex = currentPage * evtPerPage;
    const firstEvtIndex = lastEvtIndex - evtPerPage;
    const currentEvt = events.slice(firstEvtIndex, lastEvtIndex);

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

    function moreBtnClick(event, index) {
        if(event.isActive === false) {
            setEvents(events.map((v, idx) => index === idx ? {...v, isActive: true} : v));
        } else {
            setEvents(events.map((v, idx) => index === idx ? {...v, isActive: false} : v));
        }
    }

    function chatBtnClick(event, index) {
        if(event.chat === false) {
            setEvents(events.map((v, idx) => index === idx ? {...v, chat: true} : v));
        } else {
            setEvents(events.map((v, idx) => index === idx ? {...v, chat: false} : v));
        }
    }

    function accessBtnClick(event, index) {
        if(event.access === false) {
            setEvents(events.map((v, idx) => index === idx ? {...v, access: true} : v));
        } else {
            setEvents(events.map((v, idx) => index === idx ? {...v, access: false} : v));
        }
    }

    function paginate(pageNumber){
        setCurrentPage(pageNumber);
    }

    function prevPage() {
        if(firstEvtIndex > 0) {
            setCurrentPage(prev => prev - 1)
        } else {
            setCurrentPage(perv => perv)
        }
    }

    function nextPage() {
        setCurrentPage(prev => prev + 1)
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
                    <div className="box">
                        {currentEvt.map((event, i) => {
                            return (
                                <div key={event.id}>
                                    <ul className="tbl__contents">
                                        <li className="tbl__content tbl__content-number">{event.id}</li>
                                        <li className="tbl__content tbl__content-title">{event.name}<button className={event.isActive ? "tbl__content-title-btn" : "tbl__content-title-btn tbl__content-title-btn_active"} onClick={() => moreBtnClick(event, i)}></button></li>
                                        <li className="tbl__content tbl__content-status"><button className="tbl__content-status-btn">запланировано</button></li>
                                        <li className="tbl__content tbl__content-date">{event.date}, {event.time}</li>
                                        <li className="tbl__content tbl__content-lead">{event.lead}</li>
                                        <li className="tbl__content tbl__content-moder">Попов Александр</li>
                                        <li className="tbl__content tbl__content-access"><button className={event.access ? "tbl__content-access-btn tbl__content-access-btn_active" : "tbl__content-access-btn"} onClick={() => accessBtnClick(event, i)}>{event.access ? "открытый" : "закрытый"}</button></li>
                                        <li className="tbl__content tbl__content-chat"><button className={event.chat ? "tbl__content-chat-btn" : "tbl__content-chat-btn tbl__content-chat-btn_active"} onClick={() => chatBtnClick(event, i)}>{event.chat ? "выкл" : "вкл"}</button></li>
                                        <li className="tbl__content tbl__content-options"><button className="tbl__content-options-btn" onClick={() => setPopupOptionsActive(true)}><img src={OptionsBtn} alt="Опции"/></button><button className="tbl__content-options-btn" onClick={handleDeleteEventClick}><img src={DeleteBtn} alt="Удалить"/></button></li>
                                    </ul>
                                    <ul className={event.isActive ? "tbl__content-details" : "tbl__content-details tbl__content-details_active" }>
                                        <li className="tbl__content-details_elem">Ссылка на мероприятие: <a className="tbl__content-details_elem-link" href="#">https://app.inwebsale.com/moderator/#events</a></li>
                                        <li className="tbl__content-details_elem">YouTube трансляция: <a className="tbl__content-details_elem-link" href="#">{event.more.link_youtube}</a></li>
                                        <li className="tbl__content-details_elem">Заглушка: <a className="tbl__content-details_elem-link" href="#">{event.more.link_stub}</a></li>
                                        <li className="tbl__content-details_elem">Кликабельные ссылки от пользователей: <a className="tbl__content-details_elem-link" href="#">{event.more.link_users}</a></li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                    <Pagination
                        evtPerPage={evtPerPage}
                        totalEvt={events.length}
                        paginate={paginate}
                        nextPage={nextPage}
                        prevPage={prevPage}
                    />
                </div>
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
