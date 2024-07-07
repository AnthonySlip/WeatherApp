import React, {FC} from 'react';


interface Props {
    key: any
    time: any
    stateImg: any
    temperature: any
}

const HourlyForecastItem: FC<Props> = (props) => {
    return (
        <div className="hourlyForecastItem">
            <div className="hourlyForecastItem__body">
                <div className="hourlyForecastItem__stateIcon">
                    {props.stateImg}
                </div>
                <div className="hourlyForecastItem__temperature">{Math.floor(props.temperature)}°C</div>
                <div className="hourlyForecastItem__time">{props.time}:00</div>
            </div>
        </div>    
    );
};

export default React.memo(HourlyForecastItem);