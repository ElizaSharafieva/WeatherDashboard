import styles from './styles.module.scss';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Location from '../Location/Location';
import DaysForecast from '../DaysForecast/DaysForecast';

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <Location />
        <CurrentWeather />
        <DaysForecast />
      </div>
    </main>
  );
}

export default Main;