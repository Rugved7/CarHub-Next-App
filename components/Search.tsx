"use client";
import { useState } from "react"; // to know what state of car is being used
import React from "react";
import { SearchCar } from ".";

export default function Search() {
  const [manufacturer, setManufacturer] = useState("");

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        {/* Here we will render the search manufacturer component */}
        <SearchCar
          manufacturer={manufacturer}  // the state of manufacturer is sent as props to the SearchCar component
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}
