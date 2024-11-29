import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Gallery.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import bridal_henna1 from "../../assets/gallery/bridal_henna1.jpg";
import bridal_henna2 from "../../assets/gallery/henna2.jpg";
import henna3 from "../../assets/gallery/henna3.jpg";
import henna4 from "../../assets/gallery/henna4.jpg";
import henna5 from "../../assets/gallery/henna5.jpg";
import henna6 from "../../assets/gallery/henna6.jpg";
import henna7 from "../../assets/gallery/henna7.jpg";
import henna8 from "../../assets/gallery/henna8.jpg";
import henna9 from "../../assets/gallery/henna9.jpg";
import henna10 from "../../assets/gallery/henna10.jpg";
import henna11 from "../../assets/gallery/henna11.jpg";
import henna12 from "../../assets/gallery/henna12.jpg";
import henna13 from "../../assets/gallery/henna13.jpg";
import henna14 from "../../assets/gallery/henna14.jpg";
import henna15 from "../../assets/gallery/henna15.jpg";
import henna16 from "../../assets/gallery/henna16.jpg";
import henna17 from "../../assets/gallery/henna17.jpg";
import henna18 from "../../assets/gallery/henna18.jpg";
import henna19 from "../../assets/gallery/henna19.jpg";
import henna20 from "../../assets/gallery/henna20.jpg";

function App() {
  return (
    <div id="gallery" className="containerr">
      <p className="gallery-title">Gallery</p>
      <h2 className="heading"> Admire the Beauty of Henna Artistry</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={bridal_henna1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bridal_henna2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna12} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna13} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna14} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna15} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna16} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna17} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna18} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna19} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={henna20} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
