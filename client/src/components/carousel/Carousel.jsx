import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../style/css/carousel.css";

const Carousel = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="max-h-72 rounded-lg shadow-xl text-slate-200"
      >
        <SwiperSlide>
          <img
            src="https://source.unsplash.com/1000x600?keyboard"
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://source.unsplash.com/1000x600?cat"
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://source.unsplash.com/1000x600?dog"
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
