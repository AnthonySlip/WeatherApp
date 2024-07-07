import React, {FC, useEffect, useState} from 'react';

import Sun from '../icons/animated/day.svg?react';
import Moon from '../icons/animated/night.svg?react';


interface Props {
    key: any
weekDay: any
stateImgItem: any
temperatureMax: any
temperatureMin: any
temMaxC: any
temMinC: any
temMaxF: any
temMinF: any
convertTemperatureFormatItem: any
}
const DailyForecastItem: FC<Props> = (props) => {
    
    const [day, setDay] = useState()
    useEffect(()=>{
        if (window.innerWidth>400){
            setDay(props.weekDay)
        } else {
            setDay(props.weekDay[0]+props.weekDay[1])
        }
    },[props.weekDay])

    return (
        <div className="dailyForecastItem">
            <div className="dailyForecastItem__body">
                <div className="dailyForecastItem__day">{day}</div>
                <div className="dailyForecastItem__state">{props.stateImgItem}</div>
                <div className="dailyForecastItem__temperature" onClick={props.convertTemperatureFormatItem}>
                    <div className={props.temMaxC}><Sun className='dailyForecastItem__sun'/>{Math.floor(props.temperatureMax)} °C</div>
                    <div className={props.temMinC}><Moon className='dailyForecastItem__moon'/>{Math.floor(props.temperatureMin)} °C</div>
                    <div className={props.temMaxF}><Sun className='dailyForecastItem__sun'/>{Math.floor(props.temperatureMax * 1.8 + 32)} °F</div>
                    <div className={props.temMinF}><Moon className='dailyForecastItem__moon'/>{Math.floor(props.temperatureMin * 1.8 + 32)} °F</div>
                </div>
            </div>
        </div>
    );
};

export default DailyForecastItem;