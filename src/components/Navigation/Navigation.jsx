import "./navigation.css";
import { NavLink, Outlet } from "react-router-dom";

export const Navigation = () => {

    return (
        <section className="nav-section">
            <div className="container">
                <ul className="nav-section__list">
                    <li className="nav-section__item">
                        <NavLink to="all" className={({isActive}) => isActive ? "nav-section__link-active nav-section__link" : "nav-section__link"}>Все</NavLink>
                    </li>

                    <li className="nav-section__item">
                        <NavLink to="articles" className={({isActive}) => isActive ? "nav-section__link-active nav-section__link" : "nav-section__link"}>Статьи</NavLink>
                    </li>

                    <li className="nav-section__item">
                        <NavLink to="longreads" className={({isActive}) => isActive ? "nav-section__link-active nav-section__link" : "nav-section__link"}>Лонгриды</NavLink>
                    </li>
                </ul>

                {/* <Outlet/> */}
            </div>
        </section>
    )
}