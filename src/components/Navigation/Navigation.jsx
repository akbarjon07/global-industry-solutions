import "./navigation.css";
import { NavLink } from "react-router-dom";

export const Navigation = () => {

    return (
        <section className="nav-section">
            <div className="container">
                <ul className="nav-section__list">
                    <li className="nav-section__item">
                        <NavLink className="nav-section__link">Все</NavLink>
                    </li>

                    <li className="nav-section__item">
                        <NavLink className="nav-section__link">Статьи</NavLink>
                    </li>

                    <li className="nav-section__item">
                        <NavLink className="nav-section__link">Лонгриды</NavLink>
                    </li>
                </ul>
            </div>
        </section>
    )
}