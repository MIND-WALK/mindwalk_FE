import axios from "axios";

export const getLocation = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=ko`,
    );

    if (response.status === 200) {
      const { data } = response;
      const { city, locality, principalSubdivision } = data;
      const formattedLocation = `${city} ${principalSubdivision} ${locality}`;

      return formattedLocation;
    }

    console.log("Error fetching location information.");

    return null;
  } catch (error) {
    console.log("Failed to fetch location information:", error);
    return null;
  }
};
