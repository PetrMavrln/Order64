import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ICarousel } from "../models/ICarousel";
import styles from "./styles.module.scss";

export const Carousel = ({ title, imgs }: ICarousel) => {
  return (
    <div className={styles.carousel}>
      <h2 className={styles.header}>{title}</h2>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={styles.mySwiper}
      >
        {imgs.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img
              className={styles.exmplImg}
              src={image.src}
              alt={image.alt || `Image ${index + 1}`}
              width="100%"
              height="100%"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
