import React from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide} from "swiper/react";
//CSS:
import './Slider.css'

// DEPENDENCIAS DO SWIPER
register();
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  const images = [
    {
      id: "1",
      image:
        "https://s.lojakings.com.br/gallery/samba-1-0110195641.jpg?format=webp",
    },
    {
      id: "2",
      image:
        "https://s.lojakings.com.br/gallery/banner-desktop-2000x886prancheta-2-1709130745.png?format=webp",
    },
    {
      id: "3",
      image:
        "https://s.lojakings.com.br/gallery/banner-desktop-2000x886prancheta-3-1709130745.png?format=webp",
    },
  ];

  return (
    <div className="slider-container">
      <Swiper
      autoplay
        slidesPerView={1}
        pagination={{clickable:true}}
        navigation
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Imagem" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
