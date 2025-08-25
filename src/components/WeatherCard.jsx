import React from "react";
import Lottie from "lottie-react";
import clearDay from "../assets/lottie/clear-day.svg";
import cloudy from "../assets/lottie/cloudy.svg";
import rain from "../assets/lottie/rain.svg";
import snow from "../assets/lottie/snow.svg";

function WeatherCard({ weather }) {
    const getAnimation = (condition) => {
        const cond = condition.toLowerCase();
        if (cond.includes("chuva")) return rain;
        if (cond.includes("nublado")) return cloudy;
        if (cond.includes("neve")) return snow;
        return clearDay;
    };

    return (
        <div
            style={{
                borderRadius: "16px",
                padding: "1.5rem",
                textAlign: "center",
                background: "rgba(255,255,255,0.1)",
                marginBottom: "2rem",
                width: "250px"
            }}
        >
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