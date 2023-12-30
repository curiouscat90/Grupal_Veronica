// src/WeatherApp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState('Madrid');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '';

  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error al obtener datos del tiempo', error);
    }
  };

  // Llamada a getWeather cuando se monta el componente (usando useEffect)
  useEffect(() => {
    getWeather();
  }, [getWeather]); // Agrega getWeather al array de dependencias

  return (
    <div>
      <button onClick={getWeather}>Actualizar Tiempo en Madrid</button>

      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          {/* Mostrar más detalles sobre el tiempo */}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;