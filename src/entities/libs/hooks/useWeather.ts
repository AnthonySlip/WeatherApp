import {  useMutation } from '@tanstack/react-query'
import {WeatherService} from '../../../shared/api/weather.service';
import {IFetchWeatherDto, IWeatherResponse} from '../../../shared/api/types';

interface IReturn {
    fetchWeather: () => Promise<IWeatherResponse>
}
export const useWeather = () => {

    const fetchWeather = useMutation<IWeatherResponse, unknown, IFetchWeatherDto>({
        mutationKey: ['weather'],
        mutationFn: WeatherService.fetchWeather,
        onSuccess: ()  => {
        }
    })


    return {
        fetchWeather
    }
}