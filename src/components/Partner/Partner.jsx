import "./partner.css";
import SwiperCore, { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay"

import Volta from "../../assets/images/volta.svg";
import Esmak from "../../assets/images/esmak.svg";
import Rosen from "../../assets/images/rosenbauer.svg";
import Tli from "../../assets/images/tli.svg";
import Grab from "../../assets/images/graboplast.svg";
import Atlas from "../../assets/images/atlas.svg";
import Sam from "../../assets/images/samauto.svg";
import Brist from "../../assets/images/brist.svg";


export const Partner = () => {
    SwiperCore.use([Autoplay]);

    return (
        <section className="partner-section">
                <h2 className="partner-section__title">Наши партнеры</h2>

                <Swiper
                    loop={true}
                    speed={5000}
                    freeMode={true}
                    direction='horizontal'
                    modules={[Autoplay]}
                    spaceBetween={80}
                    slidesPerView={5}
                    autoplay={{
                        delay:0,
                        disableOnInteraction: false
                    }
                    }
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <img className="partner-section__img" src={Volta} alt="volta" width={215} height={85} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="partner-section__img" src={Esmak} alt="volta" width={260} height={128} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="partner-section__img" src={Rosen} alt="volta" width={247} height={36} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="partner-section__img" src={Tli} alt="volta" width={181} height={69} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="partner-section__img" src={Grab} alt="volta" width={231} height={60} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="partner-section__img" src={Atlas} alt="volta" width={167} height={80} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="partner-section__img" src={Sam} alt="volta" width={245} height={40} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="partner-section__img" src={Brist} alt="volta" width={226} height={100} />
                        </SwiperSlide>



                        <SwiperSlide>
                            <img className="partner-section__img" src={Volta} alt="volta" width={215} height={85} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="partner-section__img" src={Esmak} alt="volta" width={260} height={128} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="partner-section__img" src={Rosen} alt="volta" width={247} height={36} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="partner-section__img" src={Tli} alt="volta" width={181} height={69} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="partner-section__img" src={Grab} alt="volta" width={231} height={60} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="partner-section__img" src={Atlas} alt="volta" width={167} height={80} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="partner-section__img" src={Sam} alt="volta" width={245} height={40} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="partner-section__img" src={Brist} alt="volta" width={226} height={100} />
                        </SwiperSlide>

                    </Swiper>

        </section>
    )
}