import React, { useState } from 'react';
import '../styles/burger.scss'
import SetCity from './SetCity';

const Burger = () => {
    const [active, setActive] = useState('burger__item')
    const [isActive, setIsActive] = useState(false)
    const [hideAll, setHideAll] = useState('setCity__body hidden')
    const [hideForm, setHideForm] = useState('setCity__form hidden')

    const toOpen = () => {
        if (!isActive) {
            setActive('burger__item active')
            setHideAll('setCity__body')
            setHideForm('setCity__form')
            setIsActive(!isActive)
        } else {
            setActive('burger__item')
            setHideAll('setCity__body hidden')
            setHideForm('setCity__form hidden')
            setIsActive(!isActive)
        }
    }
    return (
    <>
        <SetCity hideAll={hideAll} hideForm={hideForm}/>
        <div className="burger" onClick={toOpen}>
            <div className="burger__body">
              <div className={active}></div>
              <div className={active}></div>
              <div className={active}></div>
              <div className={active}></div>
            </div>
        </div>
    </>
    );
};

export default React.memo(Burger);