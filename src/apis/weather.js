import axios from "axios";

export const getWeather = async (lat, lon) => {
  try {
    const url = `${process.env.REACT_APP_WEATHER_API_BASE}weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&lang=kr`;
    const response = await axios.get(url);
    const { data } = response;

    return {
      name: data.name,
      id: data.weather[0].id,
      temperature: data.main.temp,
      main: data.weather[0].description,
    };
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};
