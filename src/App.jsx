import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';
import { useEffect, useState } from 'react';
import ForecastList from './components/ForecastList';
import Loading from './components/Loading';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
    const [weather, setWeather] = useState(null);

    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState('');

    useEffect(() => {
        async function fetchWeather() {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=${city}`,
                );
                const data = await response.json();

                if (data.results) {
                    setWeather(data.results);
                    setForecast(data.results.forecast.slice(1, 4));
                }
            } catch (error) {
                console.error('Erro ao buscar dados da API', error);
            } finally {
                setLoading(false);
            }
        }

        fetchWeather();
    }, [city]);

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
                    <ForecastList forecasts={forecast} />
                </>
            ) : (
                <p>Digite uma cidade para buscar o clima</p>
            )}
        </div>
    );
}

export default App;
