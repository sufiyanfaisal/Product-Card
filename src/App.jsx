import React from "react";
import products from "./data";
import ProductCard from "./ProductCard";

const App = () => {
  return (
    <div style={styles.container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "16px",
  },
};

export default App;
