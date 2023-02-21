import "./news.css";
import { Link } from "react-router-dom";
import Card from "../../assets/images/card-bg.jpeg"

export const News = () => {

    return (
        <section className="news-section">
            <div className="container">
                <ul className="news-section__list">
                    <li className="news-section__item">
                        <Link className="news-section__link" to="/article">
                            <div className="news-section__wrapper">
                                <img className="news-section__img" src={Card} alt="img" width={400} height={240}/>

                                <div className="news-section__info-wrapper">
                                    <p className="news-section__cat">Статья</p>

                                    <h4 className="news-section__title">Роботы, навыки и временная работа: данные из шести европейских стран</h4>

                                    <p className="news-section__date">21.01.2023</p>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li className="news-section__item">
                        <Link className="news-section__link" to="/article">
                            <div className="news-section__wrapper">
                                <img className="news-section__img" src={Card} alt="img" width={400} height={240}/>

                                <div className="news-section__info-wrapper">
                                    <p className="news-section__cat">Статья</p>

                                    <h4 className="news-section__title">Роботы, навыки и временная работа: данные из шести европейских стран</h4>

                                    <p className="news-section__date">21.01.2023</p>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li className="news-section__item">
                        <Link className="news-section__link" to="/article">
                            <div className="news-section__wrapper">
                                <img className="news-section__img" src={Card} alt="img" width={400} height={240}/>

                                <div className="news-section__info-wrapper">
                                    <p className="news-section__cat">Статья</p>

                                    <h4 className="news-section__title">Роботы, навыки и временная работа: данные из шести европейских стран</h4>

                                    <p className="news-section__date">21.01.2023</p>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li className="news-section__item">
                        <Link className="news-section__link" to="/article">
                            <div className="news-section__wrapper">
                                <img className="news-section__img" src={Card} alt="img" width={400} height={240}/>

                                <div className="news-section__info-wrapper">
                                    <p className="news-section__cat">Статья</p>

                                    <h4 className="news-section__title">Роботы, навыки и временная работа: данные из шести европейских стран</h4>

                                    <p className="news-section__date">21.01.2023</p>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li className="news-section__item">
                        <Link className="news-section__link" to="/article">
                            <div className="news-section__wrapper">
                                <img className="news-section__img" src={Card} alt="img" width={400} height={240}/>

                                <div className="news-section__info-wrapper">
                                    <p className="news-section__cat">Статья</p>

                                    <h4 className="news-section__title">Роботы, навыки и временная работа: данные из шести европейских стран</h4>

                                    <p className="news-section__date">21.01.2023</p>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li className="news-section__item">
                        <Link className="news-section__link" to="/article">
                            <div className="news-section__wrapper">
                                <img className="news-section__img" src={Card} alt="img" width={400} height={240}/>

                                <div className="news-section__info-wrapper">
                                    <p className="news-section__cat">Статья</p>

                                    <h4 className="news-section__title">Роботы, навыки и временная работа: данные из шести европейских стран</h4>

                                    <p className="news-section__date">21.01.2023</p>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li className="news-section__item">
                        <Link className="news-section__link" to="/article">
                            <div className="news-section__wrapper">
                                <img className="news-section__img" src={Card} alt="img" width={400} height={240}/>

                                <div className="news-section__info-wrapper">
                                    <p className="news-section__cat">Статья</p>

                                    <h4 className="news-section__title">Роботы, навыки и временная работа: данные из шести европейских стран</h4>

                                    <p className="news-section__date">21.01.2023</p>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li className="news-section__item">
                        <Link className="news-section__link" to="/article">
                            <div className="news-section__wrapper">
                                <img className="news-section__img" src={Card} alt="img" width={400} height={240}/>

                                <div className="news-section__info-wrapper">
                                    <p className="news-section__cat">Статья</p>

                                    <h4 className="news-section__title">Роботы, навыки и временная работа: данные из шести европейских стран</h4>

                                    <p className="news-section__date">21.01.2023</p>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li className="news-section__item">
                        <Link className="news-section__link" to="/article">
                            <div className="news-section__wrapper">
                                <img className="news-section__img" src={Card} alt="img" width={400} height={240}/>

                                <div className="news-section__info-wrapper">
                                    <p className="news-section__cat">Статья</p>

                                    <h4 className="news-section__title">Роботы, навыки и временная работа: данные из шести европейских стран</h4>

                                    <p className="news-section__date">21.01.2023</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}