import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';
import { useState } from 'react';
import ForecastList from './components/ForecastList';
import Loading from './components/Loading';
import useLocalWeather from './hooks/useLocalWeather'

function App() {
  const [city, setCity] = useState('');
  const { weather, loading, error } = useLocalWeather(city); 

  return (
    <div className="app-container">
      <SearchBar onSearch={setCity} />
      {loading ? (
        <Loading />
      ) : weather ? (
        <>
          <h1>
            {weather.city}

            <span>
              Nascer do sol: {weather.sunrise} | Pôr do sol: {weather.sunset}
            </span>
          </h1>
          <WeatherCard weather={weather} />
          <ForecastList forecasts={weather.forecast.slice(1, 4)} />
        </>
      ) : (
        <p>Digite uma cidade para buscar o clima</p>
      )}
    </div>
  );
}

export default App;
