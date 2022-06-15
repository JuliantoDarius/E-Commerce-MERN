import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "./slider/Slider";
import Navbar from "./navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SwiperSlide } from "swiper/react";
import {
  faEnvelope,
  faBell,
  faShoppingCart,
  // faBars,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
// import { getItems } from "../API/itemAPI.js";

const Home = () => {
  const [itemListAmount, setItemListAmount] = useState(2);

  useEffect(() => {
    const handleResizeWindow = () => {
      const clientWidth = window.innerWidth;
      const xl = 1280;
      const lg = 1024;
      const sm = 640;
      if (clientWidth > xl) return setItemListAmount(5);
      if (clientWidth > lg) return setItemListAmount(4);
      if (clientWidth > sm) return setItemListAmount(3);
      setItemListAmount(2);
    };

    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <>
      <section>
        <Navbar brand="Brand" brandLink="/">
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faShoppingCart} />
          <Link to="/login" className="">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </Link>
        </Navbar>
      </section>

      <main className="mx-5 sm:mx-10 md:mx-16 lg:mx-24 relative top-[100px] my-3">
        <section className="mb-9">
          <Slider
            className="max-h-72 rounded-lg shadow-lg"
            config={{
              spaceBetween: 30,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
              },
              loop: true,
              pagination: {
                clickable: true,
              },
              slidesPerView: 1,
            }}
          >
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/1000x600?dog"
                alt=""
                className="w-full h-auto rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/1000x600?beach"
                alt=""
                className="w-full h-auto rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/1000x600?cat"
                alt=""
                className="w-full h-auto rounded-md"
              />
            </SwiperSlide>
          </Slider>
        </section>

        <section className="relative mt-14 mb-9 bg-primary rounded-md shadow-md px-4 pb-3">
          <div className="pt-5 text-2xl tracking-widest text-center font-semibold">
            Most Sold Items
          </div>

          <Slider
            className="max-h-96 rounded-md"
            config={{
              slidesPerView: itemListAmount,
              spaceBetween: 15,
              scrollbar: true,
            }}
          >
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/1000x600?keyboard"
                alt=""
                className="w-full h-auto rounded-md mt-5 mb-6 "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/1000x600?keyboard"
                alt=""
                className="w-full h-auto rounded-md mt-5 mb-6"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/1000x600?keyboard"
                alt=""
                className="w-full h-auto rounded-md mt-5 mb-6"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/1000x600?keyboard"
                alt=""
                className="w-full h-auto rounded-md mt-5 mb-6"
              />
            </SwiperSlide>
          </Slider>
        </section>
      </main>
    </>
  );
};

export default Home;
