import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import styles from './styles.module.scss';
import { setTime, setHour, setDay } from '../../store/dateReducer';

function Location() {

  const dispatch = useDispatch();
  const cityName = useSelector(state => state.city.cityName);
  const time = useSelector(state => state.date.time);
  const timeZone = useSelector(state => state.city.timeZone);

  useEffect(() => {
    const time = setInterval(() => {
      dispatch(setTime(new Date().toJSON()))
    }, 1000)

    return () => {
      clearInterval(time)
    }
  }, [dispatch, time])

  let dayOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
    timeZone: timeZone,
  };
  let timeOptions = {
    timeZone: timeZone,
    hour: "numeric",
    minute: "numeric",
  };

  const formattedDay = new Intl.DateTimeFormat("en-US", dayOptions).format();
  const formattedTime = new Intl.DateTimeFormat("ru", timeOptions).formatToParts();
  const hour = formattedTime[0].value;

  useEffect(() => {
    dispatch(setDay(formattedDay))
  }, [formattedDay, dispatch])

  useEffect(() => {
    dispatch(setHour(hour))
  }, [hour, dispatch])

  return (
    <div className={styles.location}>
      <h2 className={styles.location__title}>{cityName}</h2>
      <time className={styles.location__time}>
        {
          formattedTime.map((item) => {
            return item.value
          })
        }
      </time>
      <p className={styles.location__date}>
        {formattedDay}
      </p>
    </div>
  );
}

export default Location;