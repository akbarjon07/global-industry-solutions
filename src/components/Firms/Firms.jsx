import { Link } from "react-router-dom";
import "./firms.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Atlas from "../../assets/images/firm-gb.png";
import Graboplast from "../../assets/images/graboplast-bg.jpeg";
import Rosen from "../../assets/images/rosen-bg.jpeg";
import Global from "../../assets/images/global-bg.jpeg";


export const Firms = () => {

    return (
        <section className="firms-section">
            <div className="container">
                <Swiper className="swiper-list"
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >

                    <SwiperSlide>
                        <Link to="/company">
                            <img src={Atlas} alt="img" width={453} height={600}/>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/company">
                            <img src={Graboplast} alt="img" width={560} height={600}/>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/company">
                            <img src={Rosen} alt="img" width={453} height={600}/>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/company">
                            <img src={Global} alt="img" width={453} height={600}/>
                        </Link>
                    </SwiperSlide>
                </Swiper>

                <div className="firms-section__wrapper">
                    <h2 className="firms-section__title">Atlas Copco</h2>

                    <p className="firms-section__desc">
                        ПРОДУКТЫ И РЕШЕНИЯ

                        <br /><br />Отрасли промышленности по всему миру полагаются на превосходство Atlas Copco. Atlas Copco предлагает инновационные компрессорные системы для обработки воздуха, вакуумные решения, промышленные электроинструменты и сборочные системы, а также решения для подачи воздуха, электроэнергии и воды.
                        <br /><br />РЕШЕНИЯ ДЛЯ ПРОМЫШЛЕННОЙ СБОРКИ
                        <br /><br />Ударные ключи с электроприводом
                        <br />Пневматические гайковерты
                        <br />Аккумуляторные гайковерты
                        <br />Гидравлика
                        <br />Сверла шлифовальные машины
                        <br />Отбойные молотки
                        <br />Оборудование для контроля качества
                    </p>
                </div>
            </div>
        </section>
    )
}