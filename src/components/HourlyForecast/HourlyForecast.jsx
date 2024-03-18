import styles from './styles.module.scss';
import clear from '../../images/clear.png';
import cloudy from '../../images/cloudy.png';
import rainy from '../../images/rainy.png';
import thunderstorm from '../../images/thunderstorm.png';
import snowy from '../../images/snowy.png';
import navigation from '../../images/navigation.png';

function HourlyForecast() {

  return (
    <div className={styles.hourlyForecast}>
      <h3 className={styles.hourlyForecast__title}>Hourly Forecast:</h3>
      <ul className={styles.hourlyForecast__list}>
        <li className={styles.hourlyForecast__item}>
          <time className={styles.hourlyForecast__time}>12:00</time>
          <img className={styles.hourlyForecast__image} src={clear} alt='солнце'></img>
          <div className={styles.hourlyForecast__data}>26°C</div>
          <img className={styles.hourlyForecast__image} src={navigation} alt='иконка направления ветра'></img>
          <div>3 km/h</div>
        </li>
        <li className={styles.hourlyForecast__item}>
          <time className={styles.hourlyForecast__time}>15:00</time>
          <img className={styles.hourlyForecast__image} src={cloudy} alt='солнце и облака'></img>
          <div className={styles.hourlyForecast__data}>27°C</div>
          <img className={styles.hourlyForecast__image} src={navigation} alt='иконка направления ветра'></img>
          <div>3 km/h</div>
        </li>
        <li className={styles.hourlyForecast__item}>
          <time className={styles.hourlyForecast__time}>18:00</time>
          <img className={styles.hourlyForecast__image} src={rainy} alt='дождь'></img>
          <div className={styles.hourlyForecast__data}>27°C</div>
          <img className={styles.hourlyForecast__image} src={navigation} alt='иконка направления ветра'></img>
          <div>3 km/h</div>
        </li>
        <li className={styles.hourlyForecast__item}>
          <time className={styles.hourlyForecast__time}>21:00</time>
          <img className={styles.hourlyForecast__image} src={thunderstorm} alt='гроза'></img>
          <div className={styles.hourlyForecast__data}>25°C</div>
          <img className={styles.hourlyForecast__image} src={navigation} alt='иконка направления ветра'></img>
          <div>3 km/h</div>
        </li>
        <li className={styles.hourlyForecast__item}>
          <time className={styles.hourlyForecast__time}>00:00</time>
          <img className={styles.hourlyForecast__image} src={snowy} alt='снег'></img>
          <div className={styles.hourlyForecast__data}>22°C</div>
          <img className={styles.hourlyForecast__image} src={navigation} alt='иконка направления ветра'></img>
          <div>3 km/h</div>
        </li>
      </ul>
    </div>
  );
}

export default HourlyForecast;