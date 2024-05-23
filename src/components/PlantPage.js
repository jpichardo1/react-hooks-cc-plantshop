import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search"; 

function PlantPage() {
  const [plantsToShow, setPlantsToShow] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => setPlantsToShow(data));
  }, []);

  const onAddPlant = newPlant => setPlantsToShow([...plantsToShow, newPlant]);

  const updateSearchText = value => setSearchText(value);

  const filteredPlantsList = plantsToShow.filter(plant =>
    plant.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleDeletePlant = deletedPlantId =>
    setPlantsToShow(plantsToShow.filter(plant => plant.id !== deletedPlantId));

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search onChange={updateSearchText} />
      <PlantList plantsToShow={filteredPlantsList} onDeletePlant={handleDeletePlant} />
    </main>
  );
}

export default PlantPage;
