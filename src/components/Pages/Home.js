import React from "react";
import "./Home.css";

export const Home = () => {
  const products = [
    {
      id: 1,
      name: "Redmi Note 10",
      image: "https://res.cloudinary.com/diov9atga/image/upload/v1689316509/pexels-mustafa-ezz-10902918_gfpev2.jpg",
      description: "Rs. 16999",
    },
    {
      id: 2,
      name: "Iphone 14 Pro",
      image: "https://res.cloudinary.com/diov9atga/image/upload/v1689317483/pexels-vicky-marpalli-13367286_h5njnp.jpg",
      description: "Rs. 1,19,900",
    },
    {
      id: 3,
      name: "Dell Vostro 3420 Laptop",
      image: "https://res.cloudinary.com/diov9atga/image/upload/v1689317589/61FBPHH1rOL._SL1080__vsxd7e.jpg",
      description: "Rs. 39,900 ",
    },
  ];

  return (
    <div className="container">
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>

      <footer className="footer">
        &copy; 2023 Vector Shopping. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
