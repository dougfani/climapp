import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';
import { useEffect, useState } from 'react';
import ForecastList from './components/ForecastList';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
    const [weather, setWeather] = useState(null);
 
const [forecast, setForecast] = useState([]);
  
useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=São Paulo, SP`
        );
        const data = await response.json();

        if (data.results) {
          setWeather(data.results);
          setForecast(data.results.forecast.slice(1, 4)); //Aqui usamos o slice para pegar os próximos 3 items
        }
      } catch (error) {
        console.error("Erro ao buscar dados da API", error);
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
                    <ForecastList forecasts={forecast}/>
                </>
            )}
        </div>
    );
}

export default App;
