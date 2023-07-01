import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../containers/Home";
import About from "./About";
import Landing from "./Landing";
import Nav from "./Nav";
import Details from "./Details";
import WeatherApp from "./WeatherApp";
import Style from "./About.module.css"


function App() {
  const [state, setState] = useState(null);
  const [city, setCity] = useState([]);
  if (city.length === 4) {
    let citi = city.slice(1, 4);
    setCity(citi);
  }

  function deleting(id) {
    return setCity(city.filter((city) => city.id !== id));
  }


  function filtering(id) {
    return city.find((city) => city.id === parseInt(id.slice(1)));
  }
  useEffect(() => {
    function searching() {
      let apiKey = process.env.REACT_APP_API_KEY;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`
      )
        .then((r) => r.json())
        .then((recurso) => {
          if (recurso.name) return setCity([...city, recurso]);
          else {
            alert("city not found");
          }
        })
        .catch((msg) => setState(msg.message));
    }
    if (state !== null) searching(state);
  }, [state]);

  return (
    <>
      <Router>
        <Switch>
          <div className={Style.conteiner}>
          <Route exact path="/" component={Landing}></Route>
          <>
            <Nav setState={setState} />
            <Route
              exact
              path="/home"
              render={() => <Home city={city} deleting={deleting} />}
            ></Route>

            <Route exact path="/about" component={About}></Route>
            <Route exact path="/Weather-App" component={WeatherApp}></Route>
            <Route
              path={`/details/:id`}
              component={({ match }) => (
                <Details city={filtering(match.params.id)} />
              )}
            ></Route>
          </>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
