
import React, {FC, useEffect, useState} from 'react';
import '../styles/dailyforecast.scss';
import DailyForecastItem from './DailyForecastItem';

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

interface Props {
    dailyWeather: any
    convertTemperatureFormatApp: any
    convertDailyForecast: any
}
const DailyForecast: FC<Props> = (props) => {

    const [dailyForecast, setDailyForecast] = useState([])
    const [temperatureMax, setTemperatureMax] = useState(null)
    const [temperatureMin, setTemperatureMin] = useState(null)

    const stateImg = []
    const [dailyWeathercode, setDailyWeathercode] = useState(null)
    const week = []

    const currentTime = new Date().getHours()

    useEffect(() => {
        setTemperatureMax(props.dailyWeather.temperature_2m_max)
        setTemperatureMin(props.dailyWeather.temperature_2m_min)
        setDailyWeathercode(props.dailyWeather.weathercode)
        setDailyForecast(props.dailyWeather.time)
    },  [props.dailyWeather.temperature_2m_max, props.dailyWeather.temperature_2m_min, props.dailyWeather.time, props.dailyWeather.weathercode])
    
    const setImg = () => {
        for (let i = 0; i<dailyForecast.length; i++){
            if (dailyWeathercode[i] === 0) {
                if (currentTime > 6 && currentTime < 18) {
                    stateImg.push(<ClearSkyDay/>)
                } else {
                    stateImg.push(<ClearSkyNight/>)
                }
            }
            if (dailyWeathercode[i] === 1 || dailyWeathercode[i] === 2 || dailyWeathercode[i] === 3) {
                if (currentTime > 6 && currentTime < 18) {
                    stateImg.push(<CloudyDay/>)
                } else {
                    stateImg.push(<CloudyNight/>)
                }
            }
            if (dailyWeathercode[i] === 45 || dailyWeathercode[i] === 48 ) {
                stateImg.push(<Foggy/>)
            }
            if (dailyWeathercode[i] === 51 || dailyWeathercode[i] === 53 || dailyWeathercode[i] === 55 || dailyWeathercode[i] === 56 || dailyWeathercode[i] === 57){
                stateImg.push(<Drizzle/>)
            }
            if (dailyWeathercode[i] === 61 || dailyWeathercode[i] === 80) {
                stateImg.push(<SlightRain/>)
            }
            if (dailyWeathercode[i] === 63 || dailyWeathercode[i] === 81) {
                stateImg.push(<ModerateRain/>)
            }
            if (dailyWeathercode[i] === 65 || dailyWeathercode[i] === 82) {
                stateImg.push(<HeavyRain/>)
            }
            if (dailyWeathercode[i] === 71 || dailyWeathercode[i] === 77 || dailyWeathercode[i] === 85) {
                if (currentTime > 6 && currentTime < 18) {
                    stateImg.push(<SlightSnowDay/>)
                } else {
                    stateImg.push(<SlightSnowNight/>)
                }
            }
            if (dailyWeathercode[i] === 73) {
                if (currentTime > 6 && currentTime < 18) {
                    stateImg.push(<HeavySnowDay/>)
                } else {
                    stateImg.push(<ModerateSnowNight/>)
                }
            }
            if (dailyWeathercode[i] === 75 || dailyWeathercode[i] === 86) {
                if (currentTime > 6 && currentTime < 18) {
                    stateImg.push(<HeavySnowDay/>)
                } else {
                    stateImg.push(<HeavySnowNight/>)
                }
            }
            if (dailyWeathercode[i] === 95 || dailyWeathercode[i] === 96 || dailyWeathercode[i] === 99) {
                stateImg.push(<Thunder/>)
            }

        }
    }
    setImg()
    useEffect(()=>{
        
    })
    const setWeekDays = () => {
        for (let item in dailyForecast){
            const date = dailyForecast[item]
            const currentdate = new Date(date?.slice(0, 4), dailyForecast[item]?.slice(5, 7),dailyForecast[item]?.slice(8, 10))
            if (currentdate.getDay()===0) week.push('Sunday')
            if (currentdate.getDay()===1) week.push('Monday')
            if (currentdate.getDay()===2) week.push('Tuesday')
            if (currentdate.getDay()===3) week.push('Wednesday')
            if (currentdate.getDay()===4) week.push('Thursday')
            if (currentdate.getDay()===5) week.push('Friday')
            if (currentdate.getDay()===6) week.push('Saturday')
        }
        week[0]='Today'
    }
    setWeekDays()
    
    const [temMaxC, setTemMaxC] = useState('dailyForecastItem__temperatureMax')
    const [temMinC, setTemMinC] = useState('dailyForecastItem__temperatureMin')
    const [temMaxF, setTemMaxF] = useState('dailyForecastItem__temperatureMaxF hidden')
    const [temMinF, setTemMinF] = useState('dailyForecastItem__temperatureMinF hidden')
    const [isTemperatureFormat, setIsTemperatureFormat] = useState(true)
    const convertTemperatureFormat = () => {
        if (isTemperatureFormat){
            setTemMaxC('dailyForecastItem__temperatureMax')
            setTemMinC('dailyForecastItem__temperatureMin')
            setTemMaxF('dailyForecastItem__temperatureMaxF hidden')
            setTemMinF('dailyForecastItem__temperatureMinF hidden')
            setIsTemperatureFormat(!isTemperatureFormat)
        } else {
            setTemMaxC('dailyForecastItem__temperatureMax hidden')
            setTemMinC('dailyForecastItem__temperatureMin hidden')
            setTemMaxF('dailyForecastItem__temperatureMaxF')
            setTemMinF('dailyForecastItem__temperatureMinF')
            setIsTemperatureFormat(!isTemperatureFormat)
        }
    }
    const convertTemperatureFormatItem = () => {
        convertTemperatureFormat()
        props.convertTemperatureFormatApp('FromDailyForecast')
    }
    useEffect(()=>{
        convertTemperatureFormat()
    },[props.convertDailyForecast])

    if(dailyForecast) {
        return (
            <div className="dailyForecast">
                <div className="dailyForecast__body">
                <h6 className="dailyForecast__title">7 days Forecast</h6>    
                    {
                        dailyForecast.map(
                            (item, index) => {
                                return(
                                    <DailyForecastItem
                                    key={index}
                                    weekDay={week[index]}
                                    stateImgItem={stateImg[index]}
                                    temperatureMax={temperatureMax[index]}
                                    temperatureMin={temperatureMin[index]}
                                    temMaxC={temMaxC}
                                    temMinC={temMinC}
                                    temMaxF={temMaxF}
                                    temMinF={temMinF}
                                    convertTemperatureFormatItem={convertTemperatureFormatItem}/>
                                )
                            }
                        )
                    }
                </div>
            </div>
        )
    } else {
        return(
            <h3>Loading..</h3>
        )
    }
    
};

export default DailyForecast;