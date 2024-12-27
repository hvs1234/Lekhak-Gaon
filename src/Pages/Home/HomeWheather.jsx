/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";

const HomeWheather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Replace this with your actual OpenWeather API key
  const API_KEY = "936d9e76ed95bc2236be7f071987351b"; // <-- Your real API key goes here
  const city = "Thane Gaon, Uttarakhand, IN"; // Location for weather details

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching weather data.");
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return (
      <div className="py-[6rem] px-[4rem] w-[100%] text-center">
        <p>Loading weather data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-[6rem] px-[4rem] w-[100%] text-center">
        <p>{error}</p>
      </div>
    );
  }

  // Destructure weather data
  const {
    main: { temp, humidity },
    weather: [{ description, icon }],
    name,
  } = weatherData;

  return (
    <div className="py-[6rem] px-[4rem] w-[100%] relative">
      <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Weather in {name}</h1>
        <div className="flex items-center justify-center mb-6">
          <img
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            alt="weather-icon"
            className="w-20 h-20"
          />
          <p className="text-3xl ml-4">{description}</p>
        </div>
        <p className="text-2xl">Temperature: {temp}°C</p>
        <p className="text-2xl">Humidity: {humidity}%</p>
      </div>
    </div>
  );
};

export default HomeWheather;
