import React, { useState } from "react";
import styles from "./CarForm.module.css";

const CarForm = ({ setCars }) => {
  // Управляем состоянием
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const createCar = (e) => {
    e.preventDefault();
    console.log({ name, price, image });
    setCars((prev) => [...prev, {}]);
  };

  return (
    <form action="" className={styles.form}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <input
        type="text"
        placeholder="Image"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />

      <button onClick={(e) => createCar(e)}>Create</button>
    </form>
  );
};

export default CarForm;
