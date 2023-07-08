import { Link } from "react-router-dom";
import Style from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={Style.body}>
      <div className={Style.subBody}>
        <h1>WEATHER APP!</h1>
     
        <Link className={Style.Links} to="/home">
          CLICK
        </Link>
      </div>
    </div>
  );
}