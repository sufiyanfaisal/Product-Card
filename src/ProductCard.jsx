import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
};

export default ProductCard;
