import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "../styles/index.module.scss";
import { EffectCards, Autoplay } from "swiper/modules";
import images from "../data/images.json";

const Slider: React.FC = () => {
  return (
    <section className={styles.slider}>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        cardsEffect={{
          slideShadows: false,
        }}
        className={styles.swiper}
      >
        {images.map(({ id, image }) => (
          <SwiperSlide key={id} className={styles.swiperSlide}>
            <Image
              src={image}
              alt={`Slide ${id}`}
              width={300}
              height={300}
              priority={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
