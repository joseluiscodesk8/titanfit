import Image from "next/image";

import styles from "../styles/index.module.scss";

const products = [
  {
    gender: "women",
    title: "Women's Tech Jacket",
    description: "Una chaqueta técnica para todo el día y protección meteorológica ligera. Hechas a medida para que te sientas confortable en los trayectos cortos y en cualquier otro lugar.",
    image: "/featured/f1.avif",
  },
  {
    gender: "men",
    title: "Men's Rain Jacket",
    description: "Diseñada para una protección duradera durante los días lluviosos en la ciudad o en la carretera.",
    image: "/featured/f4.avif",
  },
  {
    gender: "women",
    title: "Women's Lightweight Windbreaker",
    description: "Ideal para días ventosos, con materiales livianos y transpirables.",
    image: "/featured/f2.avif",
  },
  {
    gender: "men",
    title: "Men's Urban Jacket",
    description: "Estilo urbano y funcionalidad técnica para los trayectos diarios.",
    image: "/featured/f3.avif",
  },
  {
    gender: "women",
    title: "Women's Everyday Jacket",
    description: "Comodidad y estilo para el día a día, en cualquier estación.",
    image: "/featured/f5.avif",
  },
  {
    gender: "men",
    title: "Men's Winter Coat",
    description: "Abrigo cálido con diseño técnico para soportar bajas temperaturas.",
    image: "/featured/f1.avif",
  },
];

const FeaturedProducts = () => {
  return (
    <section className={styles.featured}>
      {products.map((product, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.imageWrapper}>
            <Image
              src={product.image}
              alt={product.title}
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <button>Agregar al carrito</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturedProducts;
