import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../../apis/weather";

export const useWeather = (lat, lon) => {
  return useQuery(["weatherData"], () => getWeather(lat, lon), {
    enabled: Boolean(lat && lon),
  });
};
