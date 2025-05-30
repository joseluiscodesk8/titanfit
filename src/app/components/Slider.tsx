import Image from "next/image";
import { useMyContext } from "../context/MyContext"; 

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";


import styles from "../styles/index.module.scss";
import images from "../data/images.json";

const Slider: React.FC = () => {
    const { value } = useMyContext(); 
  return (
   <main className={value === 'open' ? styles.blurText : ''}>
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
   </main>
  );
};

export default Slider;
