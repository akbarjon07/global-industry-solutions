import "./header.css";
import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { DropDown } from "../DropDown/DropDown";
import Logo from "../../assets/images/Logo.svg"

export const Header = () => {

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};


    return (
        <header className="header">
            <div className="container header__container">
                <Link to="/">
                    <img className="header__img" src={Logo} alt="site-logo" width={80} height={100}/>
                </Link>

                <nav ref={navRef} className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <NavLink to="/about" onClick={showNavbar} className={({isActive}) => isActive ? "header__nav-link-active header__nav-link" : "header__nav-link"}>О компании</NavLink>
                        </li>

                        <li className="header__nav-item">
                            <NavLink to="/activity" onClick={showNavbar} className={({isActive}) => isActive ? "header__nav-link-active header__nav-link" : "header__nav-link"}>Сферы деятельности</NavLink>
                        </li>

                        <li className="header__nav-item">
                            <NavLink to="/news" onClick={showNavbar} className={({isActive}) => isActive ? "header__nav-link-active header__nav-link" : "header__nav-link"}>Новости</NavLink>
                        </li>

                        <li className="header__nav-item">
                            <NavLink to="/contacts" onClick={showNavbar} className={({isActive}) => isActive ? "header__nav-link-active header__nav-link" : "header__nav-link"}>Контакты</NavLink>
                        </li>
                    </ul>

                    <button onClick={showNavbar} className='header__close-btn nav-btn'><i className="bi bi-x-lg"></i></button>
                </nav>

                <DropDown/>

                <a className="header__number-link" href="tel:+998(90) 325 37 00">+998(90) 325 37 00</a>

                <button className='header__menu-btn nav-btn'>
                    <i onClick={showNavbar} className="bi bi-list"></i>
                </button>
            </div>
        </header>
    )
}