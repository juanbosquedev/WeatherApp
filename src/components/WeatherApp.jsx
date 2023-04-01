import Style from "./WeatherApp.module.css";

export default function WeatherApp() {
  return (
    <div className={Style.body}>
      <h1>Write a city name, country e.g. Cordoba, Ar</h1>
      <h1>Press + for more information(details)</h1>
      <h1>Press - to delete a card(city)</h1>
    </div>
  );
}
