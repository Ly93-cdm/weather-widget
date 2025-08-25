import React, { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import ThemaToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [Weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [theme, setTheme] = useState(null);

  const API_KEY = '';

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(sucess, error);

    function sucess(pos) {
      const { latitude, longitude} = pos.coords;
      fetchWeather(latitude, longitude);
    }

    function error() {
      alert("Não foi possível obter sua localização.");
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
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div 
      style={{
          minHeight: "100vh",
          background: theme === "dark" ? "#1e1e1e" : "#f5f5f5",
          color: theme === "dark" ? "#fff" : "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem"
        }} 
      className="App">
      <ThemaToggle theme={theme} setTheme={setTheme} />
      {Weather ? (
        <>
          <WeatherCard Weather={Weather} />
          <Forecast forecast={forecast} />
        </>
      ) : (
        <p>Carregando clima...</p>
      )}
    </div>
  );
}

export default App;
