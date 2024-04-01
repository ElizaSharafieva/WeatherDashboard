import '../../styles/index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Preloader from '../Preloader/Preloader';
import { isEmptyObj } from '../../utils/isEmptyObj';
import { fetchHourlyWeather } from '../../store/weatherReducer';
import { fetchDaysWeather } from '../../store/weatherReducer';
import { fetchCurrentWeather } from '../../store/weatherReducer';
import AttentionPopup from '../AttentionPopup/AttentionPopup';

function App() {
  const dispatch = useDispatch();
  const latitude = useSelector(state => state.city.latitude);
  const longitude = useSelector(state => state.city.longitude);
  const timeZone = useSelector(state => state.city.timeZone);
  const theme = useSelector((state) => state.theme.theme);
  const currentWeather = useSelector(state => state.weather.currentWeather);
  const daysWeather =  useSelector(state => state.weather.daysWeather);
  const hourlyWeather = useSelector(state => state.weather.hourlyWeather);
  const hour = useSelector(state => state.date.hour);
  const day = useSelector(state => state.date.day);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(!isEmptyObj(currentWeather) && !isEmptyObj(daysWeather) && !isEmptyObj(hourlyWeather))
      setIsLoading(true)
  }, [currentWeather, daysWeather, hourlyWeather])

  useEffect(() => {
    dispatch(fetchCurrentWeather({latitude, longitude}))
  }, [latitude, longitude, dispatch, hour])

  useEffect(() => {
    dispatch(fetchDaysWeather({latitude, longitude, timeZone}))
  }, [latitude, longitude, timeZone, dispatch, day])

  useEffect(() => {
    dispatch(fetchHourlyWeather({latitude, longitude, timeZone}))
  }, [latitude, longitude, timeZone, dispatch, hour])

  return (
    <div className={`${styles.app} theme${theme}`}>
      <div className={styles.app__container}>
        <Header />
        {
          isLoading ?  <Main setIsLoading={setIsLoading}/> : <Preloader />
        }
        {/* <AttentionPopup /> */}
      </div>
    </div>
);
}

export default App;
