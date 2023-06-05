import { useQuery } from "@tanstack/react-query";
import { getLocation } from "../../apis/location";

export const useLocation = (lat, lon) => {
  return useQuery(["locationData"], () => getLocation(lat, lon), {
    enabled: Boolean(lat && lon),
  });
};
