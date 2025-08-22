import React from "react";
import { Product } from "../types/featuringproducts";
import featuredProductsData from "../data/FeaturedProduct.json";

const FeaturedProducts: React.FC = () => {
  const products: Product[] = featuredProductsData.map((product) => ({
    ...product,
    quantity: 0, // Add a default quantity value
  }));

  return (
    <div>
      <h1>Featured Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              width: "200px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;