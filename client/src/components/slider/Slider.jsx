import propTypes from "prop-types";
import { Swiper } from "swiper/react";
import { Pagination, Navigation, Autoplay, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "../../style/css/customSlider.css";

const Slider = ({ children, config, className }) => {
  return (
    <Swiper
      slidesPerView={config?.slidesPerView || 1}
      spaceBetween={config?.spaceBetween || 0}
      centeredSlides={config?.centeredSlides || false}
      loop={config?.loop || false}
      autoplay={config?.autoplay || false}
      pagination={config?.pagination || false}
      scrollbar={config?.scrollbar || false}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, Scrollbar]}
      className={className}
    >
      {children}
    </Swiper>
  );
};

Slider.propTypes = {
  config: propTypes.object,
  className: propTypes.string,
};

export default Slider;
