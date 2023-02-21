import "./partner.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Volta from "../../assets/images/volta.svg";
import Esmak from "../../assets/images/esmak.svg";
import Rosen from "../../assets/images/rosenbauer.svg";
import Tli from "../../assets/images/tli.svg";
import Grab from "../../assets/images/graboplast.svg";
import Atlas from "../../assets/images/atlas.svg";
import Sam from "../../assets/images/samauto.svg";
import Brist from "../../assets/images/brist.svg";

export const Partner = () => {

    return (
        <section className="partner-section">
            <div className="conatainer">
                <h2 className="partner-section__title">Наши партнеры</h2>

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
                        <img className="partner-section__img" src={Volta} alt="volta-logo" width={155} height={60} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className="partner-section__img" src={Esmak} alt="volta-logo" width={168} height={80} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className="partner-section__img" src={Rosen} alt="volta-logo" width={207} height={30} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <img className="partner-section__img" src={Tli} alt="volta-logo" width={181} height={69} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <img className="partner-section__img" src={Grab} alt="volta-logo" width={230} height={60} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <img className="partner-section__img" src={Atlas} alt="volta-logo" width={167} height={80} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <img className="partner-section__img" src={Sam} alt="volta-logo" width={245} height={40} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <img className="partner-section__img" src={Brist} alt="volta-logo" width={226} height={100} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}