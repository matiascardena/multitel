import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import img1 from "/imagenes/Productos/Destacados/Relojes.jpg";
import img2 from "/imagenes/Productos/Destacados/Relojes_Ejemplo.webp";
import img3 from "/imagenes/Productos/Destacados/Centrales.png";

function SeccionNovedades() {
  const images = [img1, img2, img3];

  return (
    <>
      <Swiper
        modules={[EffectCoverflow, Navigation, Autoplay]}
        effect={"coverflow"}
        navigation={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="w-[50] mt-4">
        {images.map((slideContent, index) => (
          <SwiperSlide
            className="bg-center h-1/2 w-1/2 "
            key={index}
            loading="lazy">
            <img  style={{
                width: "50%",   // Ajusta el ancho de la imagen
                height: "150px", // Ajusta la altura de la imagen
                // objectFit: "cover", // Mantén la proporción correcta de la imagen
              }}
               className="block w-full shadow-2xl" src={slideContent} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SeccionNovedades;
