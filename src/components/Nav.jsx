import { NavLink } from "react-router-dom";
import Search from "../containers/Search";
import Style from "./Nav.module.css";
export default function Nav({ setState }) {
  return (
    <div className={Style.Navbody}>
      
      <NavLink
        className={Style.NavLink}
        activeStyle={{
          color: "white",
        }}
        to="/home"
      >
        HOME
      </NavLink>
      <NavLink
        className={Style.NavLink}
        activeStyle={{
          color: "white",
        }}
        to="/about"
      >
        ABOUT
      </NavLink>

      <NavLink
        className={Style.NavLink}
        to="/Weather-App"
        id={Style.Weather}
        activeStyle={{
          color: "white",
        }}
      >
        WEATHER-APP
      </NavLink>
      <Search
        className={Style.search}
        activeStyle={{
          color: "white",
        }}
        setState={setState}
      ></Search>
    </div>
  );
}
