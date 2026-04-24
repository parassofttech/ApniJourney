import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
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
  Search,
  Navigation,
  CloudLightning,
  CloudRain,
  Sun,
} from "lucide-react";

const API_KEY = "510bcf437caefe44b7f1ffcaef70c320";

const WeatherInfoPage = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("Lucknow");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");

      const currentRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        { params: { q: `${cityName},IN`, appid: API_KEY, units: "metric" } }
      );

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast`,
        { params: { q: `${cityName},IN`, appid: API_KEY, units: "metric" } }
      );

      setWeather(currentRes.data);
      const dailyForecast = forecastRes.data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      setForecast(dailyForecast.slice(0, 5));
    } catch (err) {
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather(city);
  };

  const formatTime = (timestamp) =>
    new Date(timestamp * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // Background color logic based on weather condition
  const getBgGradient = () => {
    if (!weather) return "from-blue-500 to-indigo-600";
    const condition = weather.weather[0].main.toLowerCase();
    if (condition.includes("cloud")) return "from-slate-400 to-blue-500";
    if (condition.includes("rain")) return "from-blue-700 to-slate-800";
    if (condition.includes("clear")) return "from-orange-400 to-blue-500";
    return "from-blue-500 to-indigo-600";
  };

  return (
    <div className={`min-h-screen transition-all duration-1000 bg-gradient-to-br ${getBgGradient()} text-white font-sans selection:bg-white/30`}>
      
      {/* --- HERO SECTION & SEARCH --- */}
      <section className="relative pt-10 pb-20 px-6 max-w-7xl mx-auto">
        <nav className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
              <CloudSun size={32} className="text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tighter uppercase">SkyCast</h1>
          </motion.div>

          <form onSubmit={handleSearch} className="relative group w-full md:w-96">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search Indian Cities..."
              className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-white/50 transition-all placeholder:text-white/60 text-lg"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 group-focus-within:text-white" size={20} />
            <button className="hidden" type="submit">Search</button>
          </form>
        </nav>

        {loading ? (
          <div className="h-[60vh] flex flex-col items-center justify-center gap-4">
            <Loader2 className="w-16 h-16 animate-spin text-white/50" />
            <p className="animate-pulse font-medium tracking-widest uppercase text-sm">Fetching Atmospheric Data...</p>
          </div>
        ) : error ? (
          <div className="h-[60vh] flex items-center justify-center">
             <p className="bg-red-500/20 backdrop-blur-md px-6 py-3 rounded-full border border-red-500/50 font-bold">{error}</p>
          </div>
        ) : weather && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Display */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 bg-white/10 w-fit px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                <Navigation size={14} className="fill-white" />
                <span className="text-sm font-bold tracking-widest uppercase">{weather.name}, {weather.sys.country}</span>
              </div>
              
              <div className="relative">
                <h2 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter flex items-start">
                  {Math.round(weather.main.temp)}
                  <span className="text-4xl md:text-6xl mt-6">°C</span>
                </h2>
                <motion.img 
                   animate={{ y: [0, -15, 0] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                   className="absolute -right-10 md:right-20 top-0 w-32 md:w-64 drop-shadow-2xl"
                   alt="weather icon"
                />
              </div>

              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-light capitalize opacity-90">{weather.weather[0].description}</p>
                <div className="flex gap-4 text-white/70 font-medium">
                  <span>H: {Math.round(weather.main.temp_max)}°</span>
                  <span>L: {Math.round(weather.main.temp_min)}°</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Detailed Grid */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <DetailCard icon={<Thermometer />} label="Feels Like" value={`${weather.main.feels_like}°`} />
              <DetailCard icon={<Droplets />} label="Humidity" value={`${weather.main.humidity}%`} />
              <DetailCard icon={<Wind />} label="Wind" value={`${weather.wind.speed} m/s`} />
              <DetailCard icon={<Gauge />} label="Pressure" value={`${weather.main.pressure}`} />
              <DetailCard icon={<Sunrise />} label="Sunrise" value={formatTime(weather.sys.sunrise)} />
              <DetailCard icon={<Sunset />} label="Sunset" value={formatTime(weather.sys.sunset)} />
            </motion.div>
          </div>
        )}
      </section>

      {/* --- 5 DAY FORECAST SECTION --- */}
      {weather && !loading && (
        <section className="bg-white/10 backdrop-blur-3xl border-t border-white/20 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-3xl font-black uppercase tracking-tighter">5-Day Outlook</h3>
              <div className="h-px flex-1 bg-white/20"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {forecast.map((day, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-[2rem] text-center backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <p className="text-white/60 font-bold text-sm uppercase mb-2">
                    {new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}
                  </p>
                  <p className="text-xs text-white/40 mb-4">{new Date(day.dt_txt).toLocaleDateString()}</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt="icon"
                    className="w-20 mx-auto drop-shadow-lg"
                  />
                  <p className="text-3xl font-black mb-1">{Math.round(day.main.temp)}°</p>
                  <p className="text-[10px] uppercase font-black tracking-widest text-white/60">
                    {day.weather[0].main}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer Decoration */}
      <footer className="py-10 text-center opacity-40 text-xs font-bold tracking-[0.5em] uppercase">
        Atmospheric Intelligence Platform &copy; 2026
      </footer>
       <div className="mb-9"></div>
    </div>
  );
};

// Reusable Detail Card with Blur effect
const DetailCard = ({ icon, label, value }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center gap-2 hover:bg-white/20 transition-all cursor-default group">
    <div className="text-white/40 group-hover:text-white transition-colors">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <p className="text-[10px] font-black uppercase tracking-widest text-white/50">{label}</p>
    <p className="text-xl font-bold tracking-tight">{value}</p>
   
  </div>
);

export default WeatherInfoPage;