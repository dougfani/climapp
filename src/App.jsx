import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=São Luís, MA`
        );
        const data = await response.json();
        if (data.results) {
          setWeather(data.results);
        }
      } catch (erro) {
        console.error("Erro ao buscar dados da API", erro);
      }
    }

    fetchWeather();
  }, []);

  return (
    <div className="app-container">
      <SearchBar />
      {weather && (
        <>
          <h1>{weather.city}</h1>
          <WeatherCard weather={weather} />
        </>
      )}
    </div>
  );
}

export default App;
