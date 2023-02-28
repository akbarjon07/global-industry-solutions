import "./footer.css";
import { NavLink } from "react-router-dom";
import Inweb from "../../assets/images/inweb.png";
import Instagram from "../../assets/images/instagram.svg";
import Facebook from "../../assets/images/facebook.svg";
import Twit from "../../assets/images/twit.svg";



export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <NavLink to="/" className={({isActive}) => isActive ? "footer__nav-link-active footer__nav-link" : "footer__nav-link"}>Главная</NavLink>
              </li>

              <li className="footer__nav-item">
                <NavLink to="/about" className={({isActive}) => isActive ? "footer__nav-link-active footer__nav-link" : "footer__nav-link"}>О нас</NavLink>
              </li>

              <li className="footer__nav-item">
                <NavLink to="/activity" className={({isActive}) => isActive ? "footer__nav-link-active footer__nav-link" : "footer__nav-link"}>
                  Сферы деятельности
                </NavLink>
              </li>

              <li className="footer__nav-item">
                <NavLink to="/news" className={({isActive}) => isActive ? "footer__nav-link-active footer__nav-link" : "footer__nav-link"}>Новости</NavLink>
              </li>

              <li className="footer__nav-item">
                <NavLink to="/contacts" className={({isActive}) => isActive ? "footer__nav-link-active footer__nav-link" : "footer__nav-link"}>Контакты</NavLink>
              </li>
            </ul>
          </nav>

          <div className="footer__contact-wrapper">
            <h4 className="footer__contact-title">Контакты</h4>

            <div className="footer__location-wrapper div-con">
              <i class="bi bi-geo-alt icon"></i>

              <div className="footer__location-name">
                <p className="footer__location-desc">
                  Рядом с домом №17, ул. Чупон-Ота, Чиланзарский район, Ташкент,
                  100097, Республика Узбекистан
                </p>

                <a className="footer__location-link" href="#">
                  Посмотреть на карте
                </a>
              </div>
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

            <div className="footer__time-wrapper div-con">
              <i class="bi bi-clock icon"></i>

              <p className="footer__time-desc word">
                Рабочие дни: Пн-Пт с 9:00 до 18:00
              </p>
            </div>

            <div className="footer__mail-wrapper div-con">
              <i class="bi bi-envelope icon"></i>

              <a
                className="footer__mail-link word"
                href="mailto:info@global-industrial.uz"
              >
                info@global-industrial.uz
              </a>
            </div>
          </div>

          <ul className="footer__media-list">
            <li className="footer__media-item">
              <a className="footer__media-link" href="#">
                <img className="footer__media-img" src={Twit} alt="twitter" width={40} height={40} />
              </a>
            </li>

            <li className="footer__media-item">
              <a className="footer__media-link" href="#">
                <img className="footer__media-img" src={Instagram} alt="twitter" width={40} height={40} />
              </a>
            </li>

            <li className="footer__media-item">
              <a className="footer__media-link" href="#">
                <img className="footer__media-img" src={Facebook} alt="twitter" width={40} height={40} />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__bottom">
          <p className="footer__bottom__desc">Copyright © {new Date().getFullYear()} All rights reserved. global-industrial.uz</p>

          <a href="https://inweb.uz/" className="footer__bottom__wrapper">
            <p className="footer__bottom__company-name">Разработка - </p>
            <img className="footer__bottom__company-img" src={Inweb} alt="com-logo" width={15} height={18}/>
          </a>
        </div>
      </div>
    </footer>
  );
};
