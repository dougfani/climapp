import { useEffect, useState } from 'react';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const useLocalWeather = (city) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchWeather(lat, lon) {
      setError('');
      try {
        setLoading(true);
        let url = '';

        if (city) {
          url = `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=${city}`;
        } else {
          url = `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&lat=${lat}&lon=${lon}`;
        }
        const response = await fetch(url);
        const data = await response.json();

        if (data.results) {
          setWeather(data.results);
        }
      } catch (err) {
        console.error('Erro ao buscar dados da API', err);
      } finally {
        setLoading(false);
      }
    }

    if (city) {
      fetchWeather();
    } else if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (err) => {
          setError('Permissão de localização negada. ' + err.message);
          setLoading(false);
        },
        {
          enableHighAccuracy: true,
        },
      );
    } else {
      setError('Geolocalização não suportada pelo navegador');
      setLoading(false);
    }
  }, [city]);

  return {weather, loading, error};
};

export default useLocalWeather;