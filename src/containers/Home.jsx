import Card from "../components/Card.jsx";
import "./Home.css";

function Home({ city, deleting }) {
  
  return (
    <div className="Home">
      <header className="Home-header">
        {city.length === 0 ? (
          <div className="Home-logo">🌎</div>
        ) : (
          city[0].name !== undefined  &&
          city.map((citys) => {
            return (
              <Card
                id={citys.id}
                deleting={deleting}
                key={citys.id}
                name={citys.name}
                temperature={Math.round(citys.main.temp - 273.15)}
                country={citys.sys.country}
                icon={citys.weather[0].icon}
              />
            );
          })
        )}
      </header>
    </div>
  );
}

export default Home;
