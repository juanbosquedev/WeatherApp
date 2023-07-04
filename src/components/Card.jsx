import { Link } from "react-router-dom";
import Style from "./Card.module.css";

export default function Card({
  deleting,
  name,
  country,
  temperature,
  icon,
  id,
}) {
  return (
    <div className={Style.body}>
      <button className={Style.close} onClick={() => deleting(id)}>
        x
      </button>

      <tag>
        {name}, {country}
      </tag>
      <div className={Style.mid}>
        <img
          src={`https://openweathermap.org/img/w/${icon}.png`}
          alt="icon weather"
        />
        <tag>{temperature} °</tag>
        <Link
          className={Style.link}
          Style="text-decoration:none"
          to={`/details/:${id}`}
        >
          Info
        </Link>
      </div>
    </div>
  );
}
