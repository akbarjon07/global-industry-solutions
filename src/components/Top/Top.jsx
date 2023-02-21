import "./top.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg"

export const Top = () => {

    return (
        <header className="top">
            <div className="container top__container">
                <Link to="/">
                    <img src={Logo} alt="site-logo" width={80} height={100}/>
                </Link>

                <nav className="top__nav">
                    <ul className="top__nav-list">
                        <li className="top__nav-item">
                            <NavLink to="/about" className={({isActive}) => isActive ? "top__nav-link-active top__nav-link" : "top__nav-link"}>О компании</NavLink>
                        </li>

                        <li className="top__nav-item">
                            <NavLink to="/activity" className={({isActive}) => isActive ? "top__nav-link-active top__nav-link" : "top__nav-link"}>Сферы деятельности</NavLink>
                        </li>

                        <li className="top__nav-item">
                            <NavLink to="/news" className={({isActive}) => isActive ? "top__nav-link-active top__nav-link" : "top__nav-link"}>Новости</NavLink>
                        </li>

                        <li className="top__nav-item">
                            <NavLink to="/contacts" className={({isActive}) => isActive ? "top__nav-link-active top__nav-link" : "top__nav-link"}>Контакты</NavLink>
                        </li>
                    </ul>
                </nav>

                <select className="top__select">
                    <option value="ru">RU</option>
                    <option value="eng">ENG</option>
                </select>

                <a className="top__number-link" href="tel:+998(90) 325 37 00">+998(90) 325 37 00</a>
            </div>
        </header>
    )
}