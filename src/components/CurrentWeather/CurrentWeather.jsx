import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import styles from './styles.module.scss';
import SVGWrappepr from '../SvgComponents/SVGWrapper';

import sunny from '../../images/sunny.svg';
import night from '../../images/moon.png';
import rainy from '../../images/rainy.png';
import cloudy from '../../images/cloudy.png';
import snowy from '../../images/snowy.png'

import {ReactComponent as Humidity} from '../../images/humidity.svg';
import {ReactComponent as Wind} from '../../images/wind.svg';
import {ReactComponent as Pressure} from '../../images/pressure.svg';
import {ReactComponent as UV} from '../../images/uv.svg';
import {ReactComponent as Sunrise} from '../../images/sunrise.svg';
import {ReactComponent as Sunset} from '../../images/sunset.svg';

function CurrentWeather() {

  const temperature = useSelector(state => state.weather.currentWeather.temperature_2m);
  const apparent_temperature = useSelector(state => state.weather.currentWeather.apparent_temperature);
  const wind = useSelector(state => state.weather.currentWeather.wind_speed_10m);
  const humidity = useSelector(state => state.weather.currentWeather.relative_humidity_2m);
  const pressure = useSelector(state => state.weather.currentWeather.pressure_msl);
  const uv = useSelector(state => state.weather.uv);
  const isDay = useSelector(state => state.weather.currentWeather.is_day);
  const sunrise = useSelector(state => state.weather.sunrise);
  const sunset = useSelector(state => state.weather.sunset);
  const cloudCover = useSelector(state => state.weather.currentWeather.cloud_cover);
  const rain = useSelector(state => state.weather.currentWeather.rain);
  const snowfall = useSelector(state => state.weather.currentWeather.snowfall);

  const [background, setBackground] = useState(sunny);
  const [title, setTitle] = useState('Sunny');

  const sunriseTime = sunrise.split('T').pop();
  const sunsetTime = sunset.split('T').pop();

  const css = {
    backgroundImage: `url(${background})`,
  };

  useEffect(() => {
    if (isDay) {
      if (snowfall > 0) {setBackground(snowy); setTitle('Snowy')}
      else if (rain > 0) {setBackground(rainy); setTitle('Rainy')}
      else if (cloudCover > 40) {setBackground(cloudy); setTitle('Cloudy')}
      else {setBackground(sunny); setTitle('Sunny')}
    } else {setBackground(night); setTitle('Nighttime')}
  }, [cloudCover, isDay, rain, snowfall])

  return (
    <div className={styles.currentWeather}>
      <div className={styles.temperatureContainer}>
        <p className={styles.temperatureContainer__currentTemperature}>{Math.round(temperature)}°C</p>
        <p className={styles.temperatureContainer__feelzTemperature}>Feels like: <span className={styles.temperatureContainer__accent}>{Math.round(apparent_temperature)}°C</span></p>
        <div className={styles.twilightContainer}>
          <SVGWrappepr>
            <Sunrise />
          </SVGWrappepr>
          <div>
            <h4 className={styles.twilightContainer__title}>Sunrise</h4>
            <time className={styles.twilightContainer__time}>{sunriseTime} AM</time>
          </div>
          <SVGWrappepr>
            <Sunset />
          </SVGWrappepr>
          <div>
            <h4 className={styles.twilightContainer__title}>Sunset</h4>
            <time className={styles.twilightContainer__time}>{sunsetTime} PM</time>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.currentWeather__imageContainer} style={css}>
          <img className={styles.currentWeather__image} 
            src={background} 
            alt='иконка состояния текущей погоды'/>
        </div>
        <h3 className={styles.currentWeather__title}>{title}</h3>
      </div>
      <ul className={styles.indicatorsContainer}>
        <li className={styles.indicatorsContainer__item}>
          <SVGWrappepr>
            <Humidity />
          </SVGWrappepr>
          <p className={styles.indicatorsContainer__data}>{humidity} %</p>
          <p className={styles.indicatorsContainer__title}>Humidity</p>
        </li>
        <li className={styles.indicatorsContainer__item}>
          <SVGWrappepr>
            <Wind />
          </SVGWrappepr>
          <p className={styles.indicatorsContainer__data}>{Math.round(wind)} m/s</p>
          <p className={styles.indicatorsContainer__title}>Wind Speed</p>
        </li>
        <li className={styles.indicatorsContainer__item}>
          <SVGWrappepr>
            <Pressure />
          </SVGWrappepr>
          <p className={styles.indicatorsContainer__data}>{Math.round(pressure * 0.75)} mmHg</p>
          <p className={styles.indicatorsContainer__title}>Pressure</p>
        </li>
        <li className={styles.indicatorsContainer__item}>
          <SVGWrappepr>
            <UV />
          </SVGWrappepr>
          <p className={styles.indicatorsContainer__data}>{Math.round(uv)}</p>
          <p className={styles.indicatorsContainer__title}>max UV</p>
        </li>
      </ul>
    </div>
  );
}

export default CurrentWeather;