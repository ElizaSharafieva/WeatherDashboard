import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { isEmptyObj } from '../../utils/isEmptyObj';
import styles from './styles.module.scss';
import clear from '../../images/clear.png';
import cloudy from '../../images/cloudy.png';
import rainy from '../../images/rainy.png';
import thunderstorm from '../../images/thunderstorm.png';
import snowy from '../../images/snowy.png';
import navigation from '../../images/navigation.png';

function HourlyForecast() {

  const hourlyWeather =  useSelector(state => state.weather.hourlyWeather)
  const hour = useSelector(state => state.date.hour)

  let weatherData

  if(!isEmptyObj(hourlyWeather)) {
    const keys = Object.keys(hourlyWeather);

    const weatherArray = hourlyWeather.time.map((item, index) => {
      return `${item}, ${hourlyWeather.temperature_2m[index]}, ${hourlyWeather.precipitation_probability[index]}, ${hourlyWeather.rain[index]}, ${hourlyWeather.snowfall[index]}, ${hourlyWeather.cloud_cover_high[index]}, ${hourlyWeather.wind_speed_10m[index]}, ${hourlyWeather.wind_direction_10m[index]}`
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
    <div className={styles.hourlyForecast}>
      <h3 className={styles.hourlyForecast__title}>Hourly Forecast:</h3>
      <ul className={styles.hourlyForecast__list}>
        {
          weatherData.map((item, index) => {
            if (index > hour && index < hour + 6)
            return (
              <li key={index} className={styles.hourlyForecast__item}>
                <time className={styles.hourlyForecast__time}>{new Intl.DateTimeFormat("ru", { hour: "numeric", minute: "numeric",}).format(new Date(item.time))}</time>
                <img className={styles.hourlyForecast__image} src={clear} alt='солнце'></img>
                <div className={styles.hourlyForecast__data}>{Math.round(item.temperature_2m)}°C</div>
                <img className={styles.hourlyForecast__image} src={navigation} alt='иконка направления ветра' style={{transform: `rotate(${item.wind_direction_10m}deg)`,}} ></img>
                <div>{Math.ceil(item.wind_speed_10m)} km/h</div>
              </li>

            )
          })
        } 
      </ul>
    </div>
  );
}

export default HourlyForecast;