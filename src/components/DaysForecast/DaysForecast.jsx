import styles from './styles.module.scss';

import moon from '../../images/moon.png'

function DaysForecast() {

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