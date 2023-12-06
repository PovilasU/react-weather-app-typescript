import React from "react";

interface WeatherDisplayProps {
  temperature: number;
  description: string;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  temperature,
  description,
}) => {
  return (
    <div>
      <h2>Weather Display</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default WeatherDisplay;
