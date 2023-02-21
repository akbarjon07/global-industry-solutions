import "./contacts.css";
import Map from "../../assets/images/map.jpeg"

export const Contacts = () => {

    return (
        <section className="contacts-section">
            <div className="container">
                <h2 className="contacts-section__title">Наши контакты</h2>
                <div className="contacts-section__wrapper">
                    <div className="contacts-section__left">
                        <div className="contacts-section__contact-wrapper">

                            <div className="footer__location-wrapper div-con">
                                <i class="bi bi-geo-alt icon"></i>


                                <p className="footer__location-desc address">
                                Рядом с домом №17, ул. Чупон-Ота, Чиланзарский район, Ташкент,
                                100097, Республика Узбекистан
                                </p>

                            </div>

                            <div className="footer__call-wrapper div-con">
                                <i class="bi bi-telephone icon"></i>

                                <div className="footer__call-number">
                                    <a className="footer__call-link word" href="tel:+998(71)2319238">
                                    +998(71) 231 92 38
                                    </a>

                                    <p className="footer__call-telegram word">
                                    +998(90) 325 37 00 (telegram)
                                    </p>
                                </div>
                            </div>

                            <div className="footer__mail-wrapper div-con">
                                <i class="bi bi-envelope icon"></i>

                                <a
                                    className="footer__mail-link word"
                                    href="mailto:info@global-industrial.uz">
                                    info@global-industrial.uz
                                </a>
                            </div>
                        </div>

                        <h3 className="contacts-section__heading">Напишите нам</h3>

                        <form className="contact-section__form">
                            <input className="contacts-section__name-input same-input" type="text" required placeholder="Ваше имя"/>

                            <input className="contacts-section__number-inpu same-input" type="number" required placeholder="Номер телефона"/>

                            <textarea rows={12} className="contacts-section__message-input same-input" type="text" required placeholder="Сообщение"/>

                            <button className="contacts-section__btn">Отправить</button>
                        </form>
                    </div>

                    <a href="#">
                        <img src={Map} alt="map" width={973} height={714} />
                    </a>
                </div>
            </div>
        </section>
    )
}