import React from 'react';
import '../styles/loading.scss'
import { ReactComponent as LoadingSVG } from '../icons/animated/thunder.svg';

const Loading = () => {
    return (
        <div className="loading">
            <div className="loading__body">
                <LoadingSVG className="loading__img"/>
                <div className="loading__title">
                    Loading..
                </div>
            </div>
        </div>
    );
};

export default Loading;