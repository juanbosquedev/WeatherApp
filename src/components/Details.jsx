import React from "react";
import Style from "./Details.module.css";
export default function Details({ city }) {
  return (
    <div className={Style.head}>
      <div className={Style.body} key={city.id}>
        <h1>{city.name}</h1>
        <h3>Temp max: {Math.round(city.main.temp_max - 273.15)} °</h3>
        <h3>Temp min: {Math.round(city.main.temp_min - 273.15)} °</h3>
        <h3>Humidity: {city.main.humidity} %</h3>
        <h3>Wind: {Math.round(city.wind.speed * 1.609)} km</h3>
        <h3>Clouds: {city.clouds.all} %</h3>
        <h3>Visibility: {city.visibility * 1.609} mts</h3>
        <h3>Sky: {city.weather[0].main}</h3>
      </div>
    </div>
  );
}
