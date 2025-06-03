import Image from "next/image";
import { useValue } from "../context/MyContext";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles/index.module.scss";
import images from "../data/images.json";

const sliderVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
};

const Slider: React.FC = () => {
  const { value } = useValue();
  return (
    <main className={value === "open" ? styles.blurText : ""}>
      <AnimatePresence>
        <motion.section
          className={styles.slider}
          variants={sliderVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key="slider-section"
        >
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
        </motion.section>
      </AnimatePresence>
    </main>
  );
};

export default Slider;
