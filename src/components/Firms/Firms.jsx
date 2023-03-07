import { Link } from "react-router-dom";
import "./firms.css";
import Atlas from "../../assets/images/firm-gb.png";
import Graboplast from "../../assets/images/graboplast-bg.jpeg";
import Rosen from "../../assets/images/rosen-bg.jpeg";
import Global from "../../assets/images/global-bg.jpeg";


export const Firms = () => {

    return (
        <section className="firms-section">

            <div className="firms-section__img-wrapper">
                    <Link to="#">
                        <img className="firms-section__img" src={Atlas} alt="img"/>
                    </Link>

                    <Link to="#">
                        <img className="firms-section__img" src={Graboplast} alt="img"/>
                    </Link>

                    <Link to="#">
                        <img className="firms-section__img" src={Rosen} alt="img"/>
                    </Link>

                    <Link to="#">
                        <img className="firms-section__img" src={Global} alt="img"/>
                    </Link>
            </div>

            <div className="container firms-section__container">
                <div className="firms-section__wrapper">
                    <h2 className="firms-section__title">Atlas Copco</h2>

                    <p className="firms-section__desc">ПРОДУКТЫ И РЕШЕНИЯ</p>

                    <p className="firms-section__desc desc">Отрасли промышленности по всему миру полагаются на превосходство Atlas Copco. Atlas Copco предлагает инновационные компрессорные системы для обработки воздуха, вакуумные решения, промышленные электроинструменты и сборочные системы, а также решения для подачи воздуха, электроэнергии и воды.</p>

                    <p className="firms-section__desc">РЕШЕНИЯ ДЛЯ ПРОМЫШЛЕННОЙ СБОРКИ</p>

                    <ul className="firms-section__description-list">
                        <li className="firms-section__description">
                            Ударные ключи с электроприводом
                        </li>

                        <li className="firms-section__description">
                            Пневматические гайковерты
                        </li>

                        <li className="firms-section__description">
                            Аккумуляторные гайковерты
                        </li>

                        <li className="firms-section__description">
                            Гидравлика
                        </li>

                        <li
                        className="firms-section__description">
                            Сверла шлифовальные машины
                        </li>

                        <li className="firms-section__description">
                            Отбойные молотки
                        </li>

                        <li className="firms-section__description">
                            Оборудование для контроля качества
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}