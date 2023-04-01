import { Link } from "react-router-dom";
import Style from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={Style.body}>
      <div className={Style.subBody}>
        <h1>Welcome to Weather App!</h1>
        <h4>
          An amazing place where find out the forescat about your favorite place
        </h4>

        <Link className={Style.Links} to="/home">
          CLICK ME
        </Link>
      </div>
    </div>
  );
}
