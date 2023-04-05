import Header from "./Header";
import Footer from "./Footer";

import ArrowBtn from '../images/arrow_up-down.png';
import MoreBtn from '../images/Plus.png';
import OptionsBtn from '../images/options.png';
import DeleteBtn from '../images/delete.png';
import LeftBtn from '../images/arrow_left.png';
import RightBtn from '../images/arrow_right.png';

function EventsPage() {

    return (
        <div>
            <Header/>
            <main className="content">
                <button className="evt-btn">Создать мероприятие</button>
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
                    <ul className="tbl__contents">
                        <li className="tbl__content tbl__content-number">1</li>
                        <li className="tbl__content tbl__content-title">Тест Vimeo<button className="tbl__content-title-btn"><img src={MoreBtn} alt="Подробнее"/></button></li>
                        <li className="tbl__content tbl__content-status"><button className="tbl__content-status-btn">запланировано</button></li>
                        <li className="tbl__content tbl__content-date">14.11.2023, 23:00</li>
                        <li className="tbl__content tbl__content-lead">Иван</li>
                        <li className="tbl__content tbl__content-moder">Попов Александр</li>
                        <li className="tbl__content tbl__content-access"><button className="tbl__content-access-btn">открытый</button></li>
                        <li className="tbl__content tbl__content-chat"><button className="tbl__content-chat-btn">вкл</button></li>
                        <li className="tbl__content tbl__content-options"><button className="tbl__content-options-btn"><img src={OptionsBtn} alt="Опции"/></button><button className="tbl__content-options-btn"><img src={DeleteBtn} alt="Удалить"/></button></li>
                    </ul>



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
        </div>
    )
}

export default EventsPage;
