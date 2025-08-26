import React, { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [Weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [theme, setTheme] = useState("light");
  console.log("Weather:", Weather);
      console.log("Forecast:", forecast);

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(sucess, error);

    function sucess(pos) {
      const { latitude, longitude} = pos.coords;
      fetchWeather(latitude, longitude);
    }

    function error() {
      alert("Não foi possível obter sua localização.");
      fetchWeather(-15.793889, -47.882778);
    }
  }, []);

  const fetchWeather = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=5&lang=pt`
      );
      const data = await res.json();
      setWeather(data.current);
      setForecast(data.forecast.forecastday);
      console.log("Resposta da API:", data);
      
    } catch (err) {
      console.error(err);
    }
  };

  return (
    
    <div 
      className={`App ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
        <div className='top-section'>
          {Weather ? <WeatherCard weather={Weather} theme={theme} /> : <p>Carregando clima...</p>}
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        <div className="forecast-wrapper">
          {forecast && <Forecast forecast={forecast} theme={theme} />}
        </div>
    </div>
  );
}

export default App;
