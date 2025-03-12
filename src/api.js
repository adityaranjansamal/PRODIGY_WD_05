import axios from "axios";

const API_KEY = "221cf8f686a3cbeb502b3e87d431bf3a";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export const fetchForecast = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${BASE_URL}forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
