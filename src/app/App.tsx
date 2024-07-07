import React, { useEffect, useState } from "react";
import Burger from "../components/Burger";
import CurrentTemperature from "../components/CurrentTemperature";
import DailyForecast from "../components/DailyForecast";
import HourlyForecast from "../components/HourlyForecast";
import Loading from "../components/Loading";
import Location from "../components/Location";

import '../styles/app.scss';
// import './icons/animations.scss';

let isLoading = true
const city = localStorage.getItem('city') || 'London'
const urlCity = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`

const fetchCity = async () => {
  try{ 
  const responseCity = await fetch(urlCity)
  const dataCity = await responseCity.json()
  return dataCity
  } catch (e) {
    console.warn(e)
    localStorage.setItem('city', 'London')
    window.location.reload();
  }
}
const fetchWeather = async (data) => {
  try{ 
    const {latitude,longitude} = data.results[0]
    let urlWeather = `https://api.open-meteo.com/v1/gfs?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    urlWeather = urlWeather + '&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,winddirection_10m,snowfall,weathercode'
    urlWeather = urlWeather + '&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,sunrise,sunset,weathercode&timezone=auto&forecast_days=8'
    const responseWeather = await fetch(urlWeather)
    const dataWeather = await responseWeather.json()
    return dataWeather
  } catch (e) {
    console.warn(e)
    localStorage.setItem('city', 'London')
    window.location.reload();
  }
}




function App() {

  const [currentWeather, setCurrentWeather] = useState({})
  const [hourlyWeather, setHourlyWeather] = useState({})
  const [dailyWeather, setDailyWeather] = useState({})

  const [location, setLocation] = useState('')
  const [nightBackground, setNightBackground] = useState('')

  useEffect(()=>{
    fetchCity()
    .then(
      dataCity => {
        fetchWeather(dataCity)
        .then(dataWeather => {
          // console.log(dataWeather)
          setCurrentWeather(dataWeather.current_weather)
          setHourlyWeather(dataWeather.hourly)
          setDailyWeather(dataWeather.daily)
          setLocation(dataCity.results[0])
          isLoading = false
        })
        .catch(error => {
          throw(error);
      })
      }
    )
    .catch(error => {
      throw(error)
    })

    const currentTime = new Date().getHours()
    if (currentTime < 6 || currentTime > 18) {
      setNightBackground('linear-gradient(0deg, rgba(165,211,235,1) 30%, rgba(6,0,84,1) 100%)')
    } else {
      setNightBackground('linear-gradient(0deg, rgba(165,211,235,1) 0%, rgba(60,169,238,1) 100%)')
    }
  }, [])

  const [convertCurrentTemperature, setConvertCurrentTemperature] = useState(false)
  const [convertDailyForecast, setConvertDailyForecast] = useState(false)
  const convertTemperatureFormatApp = (from) => {
    if (from==='FromDailyForecast') {
      setConvertCurrentTemperature(!convertCurrentTemperature)
    } else {
      setConvertDailyForecast(!convertDailyForecast)
    }
  }


if (isLoading) {
    return (
      <Loading/>
     )
  } else {
    return (
      <div className="app">
        <div className="app__container _container">
              <div className='app__body' style={{background: nightBackground}}>
                <Burger/>
                <div className="app__currently">
                  <CurrentTemperature currentWeather={currentWeather}
                  convertTemperatureFormatApp={convertTemperatureFormatApp}
                  convertCurrentTemperature={convertCurrentTemperature}/>
                  <Location location={location}/>
                </div>
                <HourlyForecast hourlyWeather={hourlyWeather}/>
                <DailyForecast dailyWeather={dailyWeather}
                convertTemperatureFormatApp={convertTemperatureFormatApp}
                convertDailyForecast={convertDailyForecast}/>
            </div>
        </div>
      </div>
    )
  } 
}




export default App;
