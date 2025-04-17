import "./styles.css";

const WeatherCard = () => {
  return (
    <section className="weather-card">
      <p>Hoje</p>
      <img src="./icons-weather/cloud.svg" />
      <h2 className="temperature">28°</h2>
      <p className="condition">Tempo nublado</p>
      <div className="humidity">
        <div>
          <img src="./humidity.svg" alt="" />
          <p>Umidade: </p>
        </div>
        <span>73 %</span>
      </div>
      <div className="min-max">
        <div>
          <img src="./temp.svg" alt="" />
          <p>Min/Max:</p>
        </div>
        <span>17/30°</span>
      </div>
    </section>
  );
};

export default WeatherCard;
