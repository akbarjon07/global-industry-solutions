import "./head.css";
import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg"

export const Head = () => {

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return (
        <header className="head">
            <div className="container head__container">
                <Link to="/">
                    <img className="head__img" src={Logo} alt="site-logo" width={80} height={100}/>
                </Link>

                <nav ref={navRef} className="head__nav">
                    <ul className="head__nav-list">
                        <li className="head__nav-item">
                            <NavLink to="/about" className={({isActive}) => isActive ? "head__nav-link-active head__nav-link" : "head__nav-link"}>О компании</NavLink>
                        </li>

                        <li className="head__nav-item">
                            <NavLink to="/activity" className={({isActive}) => isActive ? "head__nav-link-active head__nav-link" : "head__nav-link"}>Сферы деятельности</NavLink>
                        </li>

                        <li className="head__nav-item">
                            <NavLink to="/news" className={({isActive}) => isActive ? "head__nav-link-active head__nav-link" : "head__nav-link"}>Новости</NavLink>
                        </li>

                        <li className="head__nav-item">
                            <NavLink to="/contacts" className={({isActive}) => isActive ? "head__nav-link-active head__nav-link" : "head__nav-link"}>Контакты</NavLink>
                        </li>
                    </ul>

                    <button onClick={showNavbar} className='head__close-btn nav-btn'><i className="bi bi-x-lg"></i></button>
                </nav>

                <select className="head__select">
                    <option value="ru">RU</option>
                    <option value="eng">ENG</option>
                </select>

                <a className="head__number-link" href="tel:+998(90) 325 37 00">+998(90) 325 37 00</a>

                <button className='head__menu-btn nav-btn'>
                    <i onClick={showNavbar} className="bi bi-list"></i>
                </button>
            </div>
        </header>
    )
}