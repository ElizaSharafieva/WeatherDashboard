import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import styles from './styles.module.scss';
import { fetchDaysWeather } from '../../store/weatherReducer';
import moon from '../../images/moon.png'

function DaysForecast() {

  const dispatch = useDispatch();
  const latitude = useSelector(state => state.city.latitude);
  const longitude = useSelector(state => state.city.longitude);
  const timeZone = useSelector(state => state.city.timeZone);
  const daysWeather =  useSelector(state => state.weather.daysWeather)
 


  // const b = (Object.keys(daytimeTemperature))
  // console.log(b)

  // const daytime1 = (daytimeTemperature.time).map((e,i) => `${e}, ${daytimeTemperature.temperature_2m_max[i]}, ${daytimeTemperature.temperature_2m_min[i]}`.split(',').map((item, index) => {
  //   return (({[b[index]]: item}))
  // }))

  // console.log(daytime1)


  const keys = Object.keys(daysWeather);

  const newArr = daysWeather.time.map((item, index) => {
    return `${item}  ${daysWeather.temperature_2m_max[index]} ${daysWeather.temperature_2m_min[index]}`
  })

  // const newArr2 = newArr.map((item, index) => {
  //   return {[keys[index]]: item}
  // })

  // console.log(newArr2)









  useEffect(() => {
    dispatch(fetchDaysWeather({latitude, longitude, timeZone}))
  }, [latitude, longitude])

  return (
    <div className={styles.daysForecast}>
      <h3 className={styles.daysForecast__title}>5 Days Forecast:</h3>
      <ul>
        <li className={styles.daysForecast__item}>
          <img className={styles.daysForecast__image} src={moon} alt='солнце'></img>
          <p className={styles.daysForecast__data}>-30°C ... -44°C</p>
          <time className={styles.daysForecast__date}>01.01.2024</time>
        </li>

        <li className={styles.daysForecast__item}>
          <img className={styles.daysForecast__image} src={moon} alt='солнце'></img>
          <p className={styles.daysForecast__data}>-30°C ... -44°C</p>
          <time className={styles.daysForecast__date}>01.01.2024</time>
        </li>

        <li className={styles.daysForecast__item}>
          <img className={styles.daysForecast__image} src={moon} alt='солнце'></img>
          <p className={styles.daysForecast__data}>-30°C ... -44°C</p>
          <time className={styles.daysForecast__date}>01.01.2024</time>
        </li>

        <li className={styles.daysForecast__item}>
          <img className={styles.daysForecast__image} src={moon} alt='солнце'></img>
          <p className={styles.daysForecast__data}>-30°C ... -44°C</p>
          <time className={styles.daysForecast__date}>01.01.2024</time>
        </li>

        <li className={styles.daysForecast__item}>
          <img className={styles.daysForecast__image} src={moon} alt='солнце'></img>
          <p className={styles.daysForecast__data}>-30°C ... -44°C</p>
          <time className={styles.daysForecast__date}>01.01.2024</time>
        </li>
      </ul>
    </div>
  );
}

export default DaysForecast;