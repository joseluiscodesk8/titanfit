import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/index.module.scss";

const Logo: React.FC = () => {
  return (
    <motion.picture
      className={styles.logo}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1 }}
    >
      <Image src="/logo.png" width={100} height={100} alt="logo" quality={100}/>
    </motion.picture>
  );
};

export default Logo;

