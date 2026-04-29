import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CloudSun,
  Loader2,
  MapPin,
  Wind,
  Droplets,
  Thermometer,
  Sunrise,
  Sunset,
  Gauge,
} from "lucide-react";

const API_KEY = "510bcf437caefe44b7f1ffcaef70c320";

const WeatherInfo = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("Lucknow");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    if (!cityName) return;

    try {
      setLoading(true);
      setError("");

      const currentRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: `${cityName},IN`,
            appid: API_KEY,
            units: "metric",
          },
        }
      );

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast`,
        {
          params: {
            q: `${cityName},IN`,
            appid: API_KEY,
            units: "metric",
          },
        }
      );

      setWeather(currentRes.data);

      const dailyForecast = forecastRes.data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      setForecast(dailyForecast.slice(0, 5));
    } catch (err) {
      console.error(err);
      setError("City not found or API error");
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city.trim());
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return "--";
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-600 via-blue-400 to-indigo-200 p-6 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-slate-800 mb-2 flex justify-center items-center gap-2">
            <CloudSun className="text-yellow-500" />
            Live Weather
          </h1>

          <form onSubmit={handleSearch} className="flex justify-center gap-3 mt-4">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city..."
              className="px-4 py-2 rounded-xl border w-64 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:scale-105 transition">
              Search
            </button>
          </form>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="flex justify-center py-10">
            <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
          </div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : weather?.main ? (
          <>
            {/* CURRENT WEATHER */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">

              <div className="text-center">
                <h2 className="text-2xl font-bold flex justify-center items-center gap-2">
                  <MapPin size={18} />
                  {weather?.name}, {weather?.sys?.country}
                </h2>

                <img
                  src={`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@4x.png`}
                  alt="icon"
                  className="mx-auto"
                />

                <div className="text-6xl font-extrabold text-blue-600">
                  {Math.round(weather?.main?.temp || 0)}°C
                </div>

                <p className="capitalize text-lg text-gray-600">
                  {weather?.weather?.[0]?.description}
                </p>
              </div>

              {/* DETAILS */}
              <div className="grid grid-cols-2 gap-4">

                <DetailCard icon={<Thermometer />} label="Feels Like" value={`${weather?.main?.feels_like}°C`} />
                <DetailCard icon={<Droplets />} label="Humidity" value={`${weather?.main?.humidity}%`} />
                <DetailCard icon={<Wind />} label="Wind" value={`${weather?.wind?.speed} m/s`} />
                <DetailCard icon={<Gauge />} label="Pressure" value={`${weather?.main?.pressure} hPa`} />
                <DetailCard icon={<Sunrise />} label="Sunrise" value={formatTime(weather?.sys?.sunrise)} />
                <DetailCard icon={<Sunset />} label="Sunset" value={formatTime(weather?.sys?.sunset)} />

              </div>
            </div>

            {/* FORECAST */}
            <h3 className="text-xl font-bold mb-4">5 Day Forecast</h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {forecast.map((day, index) => (
                <div
                  key={index}
                  className="bg-gray-300/40 rounded-2xl p-4 text-center shadow-md"
                >
                  <p className="font-semibold">
                    {new Date(day?.dt_txt).toLocaleDateString()}
                  </p>

                  <img
                    src={`https://openweathermap.org/img/wn/${day?.weather?.[0]?.icon}@2x.png`}
                    alt="icon"
                    className="mx-auto"
                  />

                  <p className="font-bold text-blue-600">
                    {Math.round(day?.main?.temp || 0)}°C
                  </p>

                  <p className="text-sm capitalize">
                    {day?.weather?.[0]?.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">No data available</p>
        )}

      </div>
    </section>
  );
};

const DetailCard = ({ icon, label, value }) => (
  <div className="bg-white/60 rounded-2xl p-4 shadow text-center">
    <div className="flex justify-center text-blue-600 mb-2">{icon}</div>
    <p className="text-sm font-semibold">{label}</p>
    <p className="font-bold">{value}</p>
  </div>
);

export default WeatherInfo;