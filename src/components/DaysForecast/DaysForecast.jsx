import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import styles from './styles.module.scss';
import { isEmptyObj } from '../../utils/isEmptyObj';
import moon from '../../images/moon.png'

function DaysForecast() {

  const daysWeather =  useSelector(state => state.weather.daysWeather)

  let weatherData
  
  if(!isEmptyObj(daysWeather)) {
    const keys = Object.keys(daysWeather);

    const weatherArray = daysWeather.time.map((item, index) => {
      return `${item},${daysWeather.temperature_2m_max[index]},${daysWeather.temperature_2m_min[index]}`
        .split(',')
        .map((item, index) => {
          return {[keys[index]]: item}
        })
    })

    weatherData = (weatherArray.map((item) => {
      return item = Object.assign({}, ...item);
    }))
  }

  return (
    <div className={styles.daysForecast}>
      <h3 className={styles.daysForecast__title}>5 Days Forecast:</h3>
      <ul>
        {  
          weatherData ?
          weatherData.map((item, index) => {
            if (index < 5)
              return (
                <li key={index} className={styles.daysForecast__item}>
                  <img className={styles.daysForecast__image} src={moon} alt='солнце'></img>
                  <p className={styles.daysForecast__data}>{Math.round(item.temperature_2m_min)}°C ... {Math.round(item.temperature_2m_max)}°C</p>
                  <time className={styles.daysForecast__date}>{new Date(item.time).toDateString()}</time>
                </li>
              )
          })
          : 
          ''
        }
      </ul>
    </div>
  );
}

export default DaysForecast;