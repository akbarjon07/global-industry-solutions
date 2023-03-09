import './hero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Bg from "../../assets/images/hero-bg.png";
import Bg2 from "../../assets/images/company-bg.jpeg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export const Hero = () => {

    return (
        <section className='hero-section'>

                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    loop={true}
                    spaceBetween={80}
                    slidesPerView={1}
                    navigation
                    autoplay={{
                        delay: 9000,
                        disableOnInteraction: false
                    }}
                    pagination={{ clickable: true }}
                >

                    <SwiperSlide>
                            <div className="hero-section__wrapper">
                                <div className="hero-section__scroll">
                                    <p className='hero-section__desc'>SCROLL DOWN</p>

                                    <span className='hero-section__span'></span>
                                </div>
                            </div>

                        <img className="hero-section__img" src={Bg} loading="lazy" alt="volta-logo"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="hero-section__wrapper">
                            <div className="hero-section__scroll">
                                <p className='hero-section__desc'>SCROLL DOWN</p>

                                <span className='hero-section__span'></span>
                            </div>
                        </div>

                        <img className="hero-section__img" src={Bg2} loading="lazy" alt="volta-logo"/>
                    </SwiperSlide>
                </Swiper>

                <div className="container">
                    <h1 className='hero-section__title'>Исключительный Сервис c Качественным Оборудованием</h1>
                </div>
        </section>
    )
}