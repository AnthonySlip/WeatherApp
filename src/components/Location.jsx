import React from 'react';
import '../styles/location.scss';
// {props.country}
// {props.countryCode}
// {props.city}
// {props.latitude}
// {props.longitude}

const Location = (props) => {
    return (
        <div className="location">
            <div className="location__body">
                <div className="location__city">{props.location.name}</div>
                <div className="location__position">
                    <div className="location__latitude">{props.location.latitude.toFixed(2)}</div>
                    <div className="location__longitude">{props.location.longitude.toFixed(2)}</div>
                </div>
                <div className="location__countries">
                    <div className="location__countryCode">{props.location.country_code}</div>
                    <div className="location__country">{props.location.country}</div>
                </div>
            </div>
        </div>
    );
};

export default Location;