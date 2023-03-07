import "./workType.css";
import { Link } from "react-router-dom";
import Ger from "../../assets/images/ger.png";
import Pev from "../../assets/images/pev.png";
import Chip from "../../assets/images/chip.png";
import Pump from "../../assets/images/pump.png";
import Bike from "../../assets/images/bike.png";
import Chemic from "../../assets/images/chemic.png";
import Arrow from "../../assets/images/arrow-up-right.svg"



export const WorkType = (props) => {

    return (
        <section className="worktype-section">
            <div className="container">
                <ul className="worktype-section__list">
                    <li className="worktype-section__item">
                        <img className="worktype-section__img" src={Ger} alt="img" width={832} height={605} />

                        <div className="worktype-section__wrapper">
                            <h3 className="worktype-section__title">Гидравлическое оборудование</h3>

                            <p className="worktype-section__desc">Наш ассортимент продукции для гидравлического оборудования включает прессы, домкраты, гидравлические насосы, двигатели, компрессоры, цилиндры и т.д. <br /><br /> Это оборудование широко используется в промышленности, особенно в области автомобильной промышленности.</p>

                            <Link className="worktype-section__link" to="/company">
                                Узнать больше
                                <img src={Arrow} alt="arrow" width={24} height={24}className="worktype-section__img-arrow"></img>
                            </Link>
                        </div>
                    </li>

                    <li className="worktype-section__item">
                        <img className="worktype-section__img" src={Pev} alt="img" width={832} height={605} />

                        <div className="worktype-section__wrapper">
                            <h3 className="worktype-section__title">Пневматическое оборудование</h3>

                            <p className="worktype-section__desc">Наши возможности по поставке пневматического оборудования включают пневматические системы управления, контроллеры и вспомогательные устройства, которые помогают нашему Клиенту повысить комфорт эксплуатации оборудования.
                            <br /><br />Нашими надежными партнерами являются ведущие мировые поставщики технологий автоматизации и лидеры по производительности в области промышленного обучения и образовательных программ.</p>

                            <Link className="worktype-section__link" to="/company">
                                Узнать больше
                                <img src={Arrow} alt="arrow" width={24} height={24}className="worktype-section__img-arrow"></img>
                            </Link>
                        </div>
                    </li>

                    <li className="worktype-section__item">
                        <img className="worktype-section__img" src={Chip} alt="img" width={832} height={605} />

                        <div className="worktype-section__wrapper">
                            <h3 className="worktype-section__title">Электрооборудование и запасные части</h3>

                            <p className="worktype-section__desc">Команда GLOBAL INDUSTRIAL SOLUTIONS хотела бы сообщить вам, что мы можем поставлять трансформаторы, кабели, автомобильное электрооборудование и многое другое.<br /><br /> В то же время мы поставляем запасные части для электрооборудования, то есть детали, которые являются неотъемлемой частью электрооборудования, предназначенного для замены детали, которая была в эксплуатации до ремонта.</p>

                            <Link className="worktype-section__link" to="/company">
                                Узнать больше
                                <img src={Arrow} alt="arrow" width={24} height={24}className="worktype-section__img-arrow"></img>
                            </Link>
                        </div>
                    </li>

                    <li className="worktype-section__item">
                        <img className="worktype-section__img" src={Pump} alt="img" width={832} height={605} />

                        <div className="worktype-section__wrapper">
                            <h3 className="worktype-section__title">Насосы и компрессоры, Электродвигатели</h3>

                            <p className="worktype-section__desc">Выбор подходящих насосов или компрессоров полностью зависит от типа динамического оборудования, конструкции, мощности, производительности и функциональности.<br /><br /> Принимая во внимание строгие требования к эксплуатации компрессоров и насосов, профессиональная команда GLOBAL INDUSTRIAL SOLUTIONS проделала огромную работу для того, чтобы установить долгосрочные прочные партнерские отношения с известными европейскими производителями.</p>

                            <Link className="worktype-section__link" to="/company">
                                Узнать больше
                                <img src={Arrow} alt="arrow" width={24} height={24}className="worktype-section__img-arrow"></img>
                            </Link>
                        </div>
                    </li>

                    <li className="worktype-section__item">
                        <img className="worktype-section__img" src={Bike} alt="img" width={832} height={605} />

                        <div className="worktype-section__wrapper">
                            <h3 className="worktype-section__title">Электрические мопеды, Велосипеды и скутеры</h3>

                            <p className="worktype-section__desc">GLOBAL INDUSTRIAL SOLUTIONS является официальным дистрибьютором Volta Motor (Турция) в Республике Узбекистан.<br /><br /> Volta Motor является ведущим производителем электровелосипедов, мопедов (также трехколесных мопедов), технопедов и скутеров в Турции.<br /><br /> Продукция компании широко экспортируется в страны Европейского Союза и отвечает самым высоким требованиям безопасности и охраны окружающей среды.</p>

                            <Link className="worktype-section__link" to="/company">
                                Узнать больше
                                <img src={Arrow} alt="arrow" width={24} height={24}className="worktype-section__img-arrow"></img>
                            </Link>
                        </div>
                    </li>

                    <li className="worktype-section__item">
                        <img className="worktype-section__img" src={Chemic} alt="img" width={832} height={605} />

                        <div className="worktype-section__wrapper">
                            <h3 className="worktype-section__title">Химические продукты</h3>

                            <p className="worktype-section__desc">GLOBAL INDUSTRIAL SOLUTIONS является официальным дистрибьютором продукции Chemetall (подразделение BASF) в Республике Узбекистан.<br /><br />Наш основной ассортимент продукции включает, но не ограничивается: <br /> - Химикаты для автомобильной промышленности;<br /> - Химикаты для обработки металлов и алюминия; <br />- Полимеры;</p>

                            <Link className="worktype-section__link" to="/company">
                                Узнать больше
                                <img src={Arrow} alt="arrow" width={24} height={24}className="worktype-section__img-arrow"></img>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}