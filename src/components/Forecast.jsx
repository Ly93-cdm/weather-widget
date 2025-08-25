import React from "react";

function Forecast({ forecast }) {
    return (
        <div style={{ display: "flex", gap: "1rem" }}>
            {forecast.map((day, idx) => (
                <div
                    key={idx}
                    style={{
                        borderRadius: "12px",
                        padding: "1rem",
                        background: "rgba(255,255,255,0.1)",
                        minWidth: "100px",
                        textAlign: "center"
                    }}
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