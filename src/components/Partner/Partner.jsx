import "./partner.css";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay, Pagination } from 'swiper'
// import { useRef } from "react";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

import Volta from "../../assets/images/volta.svg";
import Esmak from "../../assets/images/esmak.svg";
import Rosen from "../../assets/images/rosenbauer.svg";
import Tli from "../../assets/images/tli.svg";
import Grab from "../../assets/images/graboplast.svg";
import Atlas from "../../assets/images/atlas.svg";
import Sam from "../../assets/images/samauto.svg";
import Brist from "../../assets/images/brist.svg";

// SwiperCore.use([Autoplay, Pagination])

export const Partner = () => {

    // const swiperRef = useRef(null)

    return (
        <section className="partner-section">
                <h2 className="partner-section__title">Наши партнеры</h2>

                {/* <div>
                    <Swiper
                        // ref={swiperRef}
                        modules={[Autoplay, Pagination]}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        freeMode={true}
                        spaceBetween={50}
                        slidesPerView={5}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <img src={Volta} alt="volta" width={215} height={85} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Esmak} alt="volta" width={260} height={128} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Rosen} alt="volta" width={247} height={36} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Tli} alt="volta" width={181} height={69} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Grab} alt="volta" width={231} height={60} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Atlas} alt="volta" width={167} height={80} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Sam} alt="volta" width={245} height={40} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Brist} alt="volta" width={226} height={100} />
                        </SwiperSlide>
                    </Swiper>
                </div> */}


                {/* <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={5}
                    freeMode={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <img src={Volta} alt="volta" width={215} height={85} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Esmak} alt="volta" width={260} height={128} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Rosen} alt="volta" width={247} height={36} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Tli} alt="volta" width={181} height={69} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Grab} alt="volta" width={231} height={60} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Atlas} alt="volta" width={167} height={80} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Sam} alt="volta" width={245} height={40} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Brist} alt="volta" width={226} height={100} />
                        </SwiperSlide>
                </Swiper> */}



                <div className="partner-section__img-wrapper">

                    <img className="partner-section__img" src={Volta} alt="volta" width={215} height={85} />

                    <img className="partner-section__img" src={Esmak} alt="volta" width={260} height={128} />

                    <img className="partner-section__img" src={Rosen} alt="volta" width={247} height={36} />

                    <img className="partner-section__img" src={Tli} alt="volta" width={181} height={69} />

                    <img className="partner-section__img" src={Grab} alt="volta" width={231} height={60} />

                    <img className="partner-section__img" src={Atlas} alt="volta" width={167} height={80} />

                    <img className="partner-section__img" src={Sam} alt="volta" width={245} height={40} />

                    <img className="partner-section__img" src={Brist} alt="volta" width={226} height={100} />

                </div>
        </section>
    )
}