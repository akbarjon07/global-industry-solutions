import "./header.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg"

export const Header = () => {

    return (
        <header className="header">
            <div className="container header__container">
                <Link to="/">
                    <img src={Logo} alt="site-logo" width={80} height={100}/>
                </Link>

                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <NavLink to="/about" className={({isActive}) => isActive ? "header__nav-link-active header__nav-link" : "header__nav-link"}>О компании</NavLink>
                        </li>

                        <li className="header__nav-item">
                            <NavLink to="/activity" className={({isActive}) => isActive ? "header__nav-link-active header__nav-link" : "header__nav-link"}>Сферы деятельности</NavLink>
                        </li>

                        <li className="header__nav-item">
                            <NavLink to="/news" className={({isActive}) => isActive ? "header__nav-link-active header__nav-link" : "header__nav-link"}>Новости</NavLink>
                        </li>

                        <li className="header__nav-item">
                            <NavLink to="/contacts" className={({isActive}) => isActive ? "header__nav-link-active header__nav-link" : "header__nav-link"}>Контакты</NavLink>
                        </li>
                    </ul>
                </nav>

                <select className="header__select">
                    <option value="ru">RU</option>
                    <option value="eng">ENG</option>
                </select>

                <a className="header__number-link" href="tel:+998(90) 325 37 00">+998(90) 325 37 00</a>
            </div>
        </header>
    )
}