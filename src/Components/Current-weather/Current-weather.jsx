import React from 'react';
import "./CurrentWeather.css"

// IMPORT IMAGES 
import iconOne from "../../Assets/icons/01d.png"

const CurrentWeather = () => {
    return (
        <div className='weather'>
            <div className="top">
                <div>
                    <p className='city'>Belgrade</p>
                    <p className='weather__description'>Sunny</p>
                </div>
                <img className='weather__icon' src={iconOne} alt="weather" />
            </div>

            <div className="bottom">
                <p className="temprature">18°C</p>
                <div className="details">
                    <div className="parameter__row">
                        <span className="parameter__label">Feels like</span>
                        <span className="parameter__value">22°C</span>
                    </div>
                    <div className="parameter__row">
                        <span className="parameter__label">Wind</span>
                        <span className="parameter__value">2 m/s</span>
                    </div>
                    <div className="parameter__row">
                        <span className="parameter__label">Humidity</span>
                        <span className="parameter__value">15%</span>
                    </div>
                    <div className="parameter__row">
                        <span className="parameter__label">Pressure</span>
                        <span className="parameter__value">15 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CurrentWeather;