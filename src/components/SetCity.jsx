import React, { useState } from 'react';
import '../styles/setcity.scss';

const SetCity = (props) => {
    const [city, setCity] = useState('')
    const setCityLocalStorage = () => {
        localStorage.setItem('city', city)
    }
    const settingCity = (Event) => {
        setCity(Event.target.value)
    }
    return (
        <div className='setCity'>
            <div className={props.hideAll}>
                <form className={props.hideForm} onSubmit={setCityLocalStorage}>
                    <input type="text" placeholder='Enter The City...' className="setCity__set" onChange={settingCity}/>
                    <input type="submit" className="setCity__submit" value='Set The City'/>
                </form>
            </div>
        </div>
    );
};

export default React.memo(SetCity);