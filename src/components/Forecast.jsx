import React from "react";
import "./Forecast.css";

function Forecast({ forecast }) {
    return (
        <div className="forecast-container">
            {forecast.map((day, idx) => (
                <div
                    key={idx}
                    
                >
                    <p style={{ fontWeight: "bold" }}>
                        {new Date(day.date).toLocaleDateString("pt-BR", { weekday: "short" })}
                    </p>
                    <p>{day.day.avgtemp_c}°C</p>
                    <p style={{ fontSize: "0.8rem" }}>{day.day.condition.text}</p>
                </div>
            ))}
        </div>
    );
}

export default Forecast;