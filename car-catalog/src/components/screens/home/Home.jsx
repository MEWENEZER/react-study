import React, { useState } from "react";

import { cars as carsData } from "./card.data";
import { CarItem } from "./car-item/CarItem";
import CarForm from "./car-form/CarForm";

const Home = () => {
  const [cars, setCars] = useState(carsData);

  /*
  // Генерируется 1 раз
  const filteredCars = useMemo(
    () => cars.filter((car) => car.price > 20000),
    // массив зависимостей
    []
  );
  */

  return (
    <div>
      <h1>Card catalog</h1>

      <CarForm setCars={setCars} />

      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There is no Card</p>
        )}
      </div>
    </div>
  );
};

export default Home;
