import React from "react";
import Lottie from "lottie-react";
import clearDay from "../assets/lottie/sunny.json";
import cloudy from "../assets/lottie/cloudy.json";
import rain from "../assets/lottie/rainy.json";
import snow from "../assets/lottie/snow.json";
import "./WeatherCard.css";

function WeatherCard({ weather, theme }) {
    if (!weather || !weather.temp_c || !weather.condition) {
        return <p>Carregando...</p>;
    }
    const getAnimation = (condition) => {
        const cond = condition.toLowerCase();
        if (cond.includes("chuva")) return rain;
        if (cond.includes("nublado")) return cloudy;
        if (cond.includes("neve")) return snow;
        return clearDay;
    };

    const cardClass = `weather-card ${theme === "dark" ? "weather-dark" : "weather-light"}`;

    return (
        <div className={cardClass} >
            <Lottie
                animationData={getAnimation(weather.condition.text)}
                loop={true}
                style={{ height: 100 }}
            />
            <h2 style={{fontSize:"2rem", margin: "0.5rem 0" }}>
                {weather.temp_c}°C
            </h2>
            <p>{weather.condition.text}</p>
      </div>
    );
}

export default WeatherCard;