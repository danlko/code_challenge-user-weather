export interface WeatherResponse {
  current_weather: {
    temperature: number;
  };
  daily: {
    temperature_2m_min: number[];
    temperature_2m_max: number[];
  };
}
