/* eslint-disable react/jsx-no-duplicate-props */

import React, {FC, useEffect, useState} from 'react';
import '../styles/currentTemperature.scss';

interface Props {
    currentWeather: any
    convertTemperatureFormatApp: any
    convertCurrentTemperature: any
}
const CurrentTemperature: FC<Props> = (props) => {
    
    const [currentTemperatureFormat, setCurrentTemperatureFormat] = useState('°C')
    const [hideC, setHideC] = useState('currentTemperature-temperature__valueC')
    const [hideF, setHideF] = useState('currentTemperature-temperature__valueF hidden')
    const [hideKMH, setHideKMH] = useState('currentTemperature-windspeed__valueKM')
    const [hideMS, setHideMS] = useState('currentTemperature-windspeed__valueM  hidden')
    const [currentWindSpeedFormat, setCurrentWindSpeedFormat] = useState('km/h')
    const [isTemperatureFormat, setIsTemperatureFormat] = useState(false)
    const [isWindSpeedFormat, setIsWindSpeedFormat] = useState(true)


    const convertTemperatureFormat = () => {
        if (isTemperatureFormat){
            setCurrentTemperatureFormat('°F')
            setHideF('currentTemperature-temperature__valueF')
            setHideC('currentTemperature-temperature__valueC hidden')
            setIsTemperatureFormat(!isTemperatureFormat)
        } else {
            setCurrentTemperatureFormat('°C')
            setHideF('currentTemperature-temperature__valueF  hidden')
            setHideC('currentTemperature-temperature__valueC')
            setIsTemperatureFormat(!isTemperatureFormat)
        }
        // props.convertTemperatureFormatApp('FromCurrentTemperature')
    }

    const convertTemperatureFormatonClick = () => {
        if (isTemperatureFormat){
            setCurrentTemperatureFormat('°F')
            setHideF('currentTemperature-temperature__valueF')
            setHideC('currentTemperature-temperature__valueC hidden')
            setIsTemperatureFormat(!isTemperatureFormat)
        } else {
            setCurrentTemperatureFormat('°C')
            setHideF('currentTemperature-temperature__valueF  hidden')
            setHideC('currentTemperature-temperature__valueC')
            setIsTemperatureFormat(!isTemperatureFormat)
        }
        props.convertTemperatureFormatApp('FromCurrentTemperature')
    }
    const convertWindSpeedFormat = () => {
        if (isWindSpeedFormat) {
            setCurrentWindSpeedFormat('m/s')
            setHideKMH('currentTemperature-windspeed__valueKM hidden')
            setHideMS('currentTemperature-windspeed__valueM')
            setIsWindSpeedFormat(!isWindSpeedFormat)
        } else {
            setCurrentWindSpeedFormat('km/h')
            setHideKMH('currentTemperature-windspeed__valueKM')
            setHideMS('currentTemperature-windspeed__valueM hidden')
            setIsWindSpeedFormat(!isWindSpeedFormat)
        }
    }
    
    useEffect(()=>{
        convertTemperatureFormat()
    },[props.convertCurrentTemperature])
    
    return (
        <div className="currentTemperature">
            <div className="currentTemperature__body">
                <div className="currentTemperature__temperature" onClick={convertTemperatureFormatonClick}>
                    <h6 className={hideC}>{Math.floor(props.currentWeather.temperature)}</h6>
                    <h6 className={hideF}>{Math.floor(props.currentWeather.temperature * 1.8 + 32)}</h6>
                    <h6 className="currentTemperature-temperature__format">{currentTemperatureFormat}</h6>
                </div>
                <div className="currentTemperature__windspeed" onClick={convertWindSpeedFormat}>
                    <h6 className={hideKMH}>{Math.floor(props.currentWeather.windspeed)}</h6>
                    <h6 className={hideMS}>{Math.floor(props.currentWeather.windspeed * 10 / 36)}</h6>
                    <h6 className="currentTemperature-temperature__format">{currentWindSpeedFormat}</h6>
                    <div className="currentTemperature-windspeed__name">
                        <svg className={"svg-icon currentTemperature-windspeed__svg"} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M143.283 443.773h380.216c37.971 0 73.8-14.918 100.889-42.007s42.008-62.918 42.008-100.889-14.919-73.8-42.008-100.889c-27.088-27.089-62.918-42.007-100.889-42.007-37.97 0-73.8 14.918-100.889 42.007s-42.007 62.919-42.007 100.889c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32 0-43.504 35.393-78.896 78.896-78.896s78.896 35.393 78.896 78.896-35.393 78.896-78.896 78.896H143.283c-17.673 0-32 14.327-32 32s14.328 32 32 32z"  />
                            <path d="M913.893 315.588c-27.088-27.089-62.918-42.007-100.889-42.007s-73.801 14.918-100.889 42.007c-27.089 27.089-42.008 62.918-42.008 100.889 0 17.673 14.327 32 32 32s32-14.327 32-32c0-43.504 35.393-78.896 78.896-78.896s78.896 35.393 78.896 78.896-35.393 78.896-78.896 78.896H100.099c-17.673 0-32 14.327-32 32s14.327 32 32 32h712.905c37.971 0 73.8-14.919 100.889-42.007 27.089-27.089 42.008-62.919 42.008-100.889s-14.919-73.8-42.008-100.889zM618.034 619.645a31.885 31.885 0 0 0-12.3-2.453H288.887c-17.673 0-32 14.327-32 32s14.327 32 32 32h304.524c32.748 0 60.414 27.666 60.414 60.414 0 32.747-27.666 60.413-60.414 60.413-32.747 0-60.413-27.666-60.413-60.413 0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32 0 33.066 12.987 64.264 36.568 87.845 23.582 23.582 54.779 36.568 87.845 36.568 33.067 0 64.265-12.986 87.846-36.568 23.581-23.581 36.568-54.778 36.568-87.845s-12.986-64.264-36.568-87.846c-17.621-17.62-39.495-29.323-63.223-34.115z"  />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentTemperature;