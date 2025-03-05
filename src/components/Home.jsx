import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// how to import ảnh
import img1 from "../assets/home-image-1.jpg";
import img2 from "../assets/home-image-2.jpg";
import img3 from "../assets/home-image-3.jpg";

const Home = () => {
  return (
    <div>
      {/* Fullscreen Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        className="w-full h-screen"
      >
        <SwiperSlide>
          <img src={img1} alt="Home 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Home 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Home 3" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>

      {/* Scroll Down Section */}
      <div className="bg-amber-300 text-black text-center text-xl py-20">
        Welcome to Our Website! Scroll down to explore more.
      </div>
    </div>
  );
};

export default Home;
