import axios from 'axios';
import {IFetchWeatherDto, IWeatherResponse} from './types';


export const WeatherService = {

     getUrlWeather(dto: IFetchWeatherDto): string {
        return `https://api.open-meteo.com/v1/gfs?latitude=${dto.latitude}&longitude=${dto.longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,winddirection_10m,snowfall,weathercode&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,sunrise,sunset,weathercode&timezone=auto&forecast_days=8`
    },

     async fetchWeather(dto: IFetchWeatherDto): Promise<IWeatherResponse> {
         return (await axios.get(this.getUrlWeather(dto))).data
    },

    async fetchCity(city: string): Promise<any> {
         return (await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)).data
    }
}