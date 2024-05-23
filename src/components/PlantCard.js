import React, { useState } from "react";

function PlantCard({ plantName, plantImage, plantPrice, plantId, onDeletePlant }) {
  const [inStock, setInStock] = useState(true);

  const handleStockToggle = () => setInStock(!inStock);

  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${plantId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => onDeletePlant(plantId));
  };

  return (
    <li className="card" data-testid="plant-item" >
      <img src={plantImage} alt={plantName} />
      <h4>{plantName}</h4>
      <p>Price: {plantPrice}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockToggle}>In Stock</button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
