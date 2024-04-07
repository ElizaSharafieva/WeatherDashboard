import {  useSelector } from 'react-redux';

import { useResize } from '../../hooks/useResize';
import styles from './styles.module.scss';
import { isEmptyObj } from '../../utils/isEmptyObj';
import clear from '../../images/clear.png';
import rainy from '../../images/rainy.png';
import snowy from '../../images/snowy.png';

function DaysForecast() {

  const windowWith = useResize();

  const daysWeather =  useSelector(state => state.weather.daysWeather)

  let weatherData
  
  if(!isEmptyObj(daysWeather)) {
    const keys = Object.keys(daysWeather);

    const weatherArray = daysWeather.time.map((item, index) => {
      return `${item},${daysWeather.temperature_2m_max[index]},${daysWeather.temperature_2m_min[index]},${daysWeather.rain_sum[index]},${daysWeather.snowfall_sum[index]}`
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
          weatherData.map((item, index) => {
            console.log(new Date(item.time).toDateString().slice(0,3))
            if (index < 5)
  
            {return (
              <li key={index} className={styles.daysForecast__item}>
                <img className={styles.daysForecast__image} src={item.snowfall_sum > 0 ? snowy : item.rain_sum > 0 ? rainy : clear} alt='солнце'></img>
                <p className={styles.daysForecast__data}>{Math.round(item.temperature_2m_min)}°C ... {Math.round(item.temperature_2m_max)}°C</p>
                <time className={styles.daysForecast__date}>
                  {windowWith > 690 ? new Date(item.time).toDateString() : new Date(item.time).toDateString().slice(0,3)}
                </time>
              </li>
            )} else return null
          })
        }
      </ul>
    </div>
  );
}

export default DaysForecast;