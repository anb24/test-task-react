import logo from '../images/Header/logo.png';
import userTestImg from '../images/Header/user_test.png'
import userExit from '../images/Header/exit.png'

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="логотип inwebsale"/>
            <nav>
                <a className="header__link">Мероприятия</a>
                <a className="header__link">Товары</a>
                <a className="header__link">Клиенты</a>
            </nav>
            <div className="header__user-box">
                <img className="header__user-img" src={userTestImg} alt="фото"/>
                <p className="header__user-email">admin@okguru.com</p>
                <button className="header__user-exit-btn"><img src={userExit}/></button>
            </div>
        </header>
    )
}

export default Header;
