/* eslint-disable jsx-a11y/heading-has-content */
import React, {FC, useEffect, useMemo, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import HourlyForecastItem from './HourlyForecastItem';
import '../styles/hourlyforecast.scss';

import ClearSkyDay from '../icons/animated/day.svg?react';
import ClearSkyNight from '../icons/animated/night.svg?react';
import CloudyDay from '../icons/animated/cloudy-day-3.svg?react';
import CloudyNight from '../icons/animated/cloudy-night-3.svg?react';
import Foggy from '../icons/animated/cloudy.svg?react';
import Drizzle from '../icons/animated/rainy-7.svg?react';
import SlightRain from '../icons/animated/rainy-4.svg?react';
import ModerateRain from '../icons/animated/rainy-5.svg?react';
import HeavyRain from '../icons/animated/rainy-6.svg?react';
import SlightSnowDay from '../icons/animated/snowy-2.svg?react';
import HeavySnowDay from '../icons/animated/snowy-3.svg?react';
import SlightSnowNight from '../icons/animated/snowy-4.svg?react';
import ModerateSnowNight from '../icons/animated/snowy-5.svg?react';
import HeavySnowNight from '../icons/animated/snowy-6.svg?react';
import Thunder from '../icons/animated/thunder.svg?react';

let slidesPerview = 6
let slidesSpace = 30
if (window.innerWidth<800){
    slidesPerview = 4
    slidesSpace = 15
    if (window.innerWidth<420) {
        slidesSpace = 10
        slidesPerview = 3
    }
    if (window.innerWidth<300) {
        slidesSpace = 5
        slidesPerview = 2
        if (window.innerWidth<210) {
            slidesSpace = 0
            slidesPerview = 1
        }
    }
}
const hourlyTemperature = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

interface Props {
    hourlyWeather: any
}
const HourlyForecast: FC<Props> = (props) => {
    const [weatherCode, setWeatherCode] = useState([])
    useEffect(() => {
        const currentTime = new Date()
        setWeatherCode(props.hourlyWeather.weathercode.slice(currentTime.getHours(),currentTime.getHours()+24))
    },[props.hourlyWeather.weathercode])

    const settingHourlyTime = useMemo(()=>{
        const currentTime = new Date()
        const hourlyTime = []
        for (let i = 0; i < 24; i++) {
            const time = new Date()
            time.setHours(currentTime.getHours()+i)
            hourlyTime.push(time.getHours())
        }
        return hourlyTime
    },[])
    const settingStateImage = useMemo(() => {
        const stateImg = []
        for (let index = 0; index < 24; index++) {
            if (weatherCode[index] === 0) {
                if (settingHourlyTime[index] > 6 && settingHourlyTime[index] < 18) {
                    stateImg.push(<ClearSkyDay/>)
                } else {
                    stateImg.push(<ClearSkyNight/>)
                }
            }
            if (weatherCode[index] === 1 || weatherCode[index] === 2 || weatherCode[index] === 3) {
                if (settingHourlyTime[index] > 6 && settingHourlyTime[index] < 18) {
                    stateImg.push(<CloudyDay/>)
                } else {
                    stateImg.push(<CloudyNight/>)
                }
            }
            if (weatherCode[index] === 45 || weatherCode[index] === 48 ) {
                stateImg.push(<Foggy/>)
            }
            if (weatherCode[index] === 51 || weatherCode[index] === 53 || weatherCode[index] === 55 || weatherCode[index] === 56 || weatherCode[index] === 57){
                stateImg.push(<Drizzle/>)
            }
            if (weatherCode[index] === 61 || weatherCode[index] === 80) {
                stateImg.push(<SlightRain/>)
            }
            if (weatherCode[index] === 63 || weatherCode[index] === 81) {
                stateImg.push(<ModerateRain/>)
            }
            if (weatherCode[index] === 65 || weatherCode[index] === 82) {
                stateImg.push(<HeavyRain/>)
            }
            if (weatherCode[index] === 71 || weatherCode[index] === 77 || weatherCode[index] === 85) {
                if (settingHourlyTime[index] > 6 && settingHourlyTime[index] < 18) {
                    stateImg.push(<SlightSnowDay/>)
                } else {
                    stateImg.push(<SlightSnowNight/>)
                }
            }
            if (weatherCode[index] === 73) {
                if (settingHourlyTime[index] > 6 && settingHourlyTime[index] < 18) {
                    stateImg.push(<HeavySnowDay/>)
                } else {
                    stateImg.push(<ModerateSnowNight/>)
                }
            }
            if (weatherCode[index] === 75 || weatherCode[index] === 86) {
                if (settingHourlyTime[index] > 6 && settingHourlyTime[index] < 18) {
                    stateImg.push(<HeavySnowDay/>)
                } else {
                    stateImg.push(<HeavySnowNight/>)
                }
            }
            if (weatherCode[index] === 95 || weatherCode[index] === 96 || weatherCode[index] === 99) {
                stateImg.push(<Thunder/>)
            }  
        }
        return stateImg  
    },[weatherCode])
    const settingHourlyTemperature = useMemo(()=>{
        const currentTime = new Date()
        const hourlyTemperature = props.hourlyWeather.temperature_2m.slice(currentTime.getHours(),currentTime.getHours()+24)
        return hourlyTemperature
    },[props.hourlyWeather.temperature_2m])

    
    return (
            <div className="hourlyForecast">
                <div className="hourlyForecast__body">
                    <h6 className="hourlyForecast__title">Today</h6>
                    <div className="hourlyForecast__swiper">
                    <Swiper
                        spaceBetween={slidesSpace || 10}
                        slidesPerView={slidesPerview || 6}
                    >
                    {
                        hourlyTemperature.map(
                            (item, index) => {
                                return(
                                    <SwiperSlide key={index}>
                                        <HourlyForecastItem
                                        key={index}
                                        time={settingHourlyTime[index]}
                                        stateImg={settingStateImage[index]}
                                        temperature={settingHourlyTemperature[index]}/>
                                    </SwiperSlide>
                                )
                        }) 
                    }
                    </Swiper>
                    </div>
                </div>
            </div>
    );
    

    
};

export default React.memo(HourlyForecast);