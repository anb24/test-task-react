import { NavLink } from "react-router-dom";

import {Logo, UserTestImg, UserExit} from "../config/links";

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={Logo} alt="логотип inwebsale"/>
            <nav>
                <NavLink className="header__link" to="/">Мероприятия</NavLink>
                <NavLink className="header__link" to="https://www.ozon.ru/category/" target="_blank">Товары</NavLink>
                <NavLink className="header__link"to="https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82#:~:text=%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%20%E2%80%94%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D1%87%D0%B8%D0%BA%2C%20%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%2C%20%D0%BF%D1%80%D0%B8%D0%BE%D0%B1%D1%80%D0%B5%D1%82%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%20%D1%83%D1%81%D0%BB%D1%83%D0%B3." target="_blank">Клиенты</NavLink>
            </nav>
            <div className="header__user-box">
                <img className="header__user-img" src={UserTestImg} alt="фото"/>
                <p className="header__user-email">admin@okguru.com</p>
                <button className="header__user-exit-btn"><img src={UserExit}/></button>
            </div>
        </header>
    )
}

export default Header;
