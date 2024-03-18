import styles from './styles.module.scss';
import SVGWrappepr from '../SvgComponents/SVGWrapper';

import sunny from '../../images/sunny.svg';
import {ReactComponent as Humidity} from '../../images/humidity.svg';
import {ReactComponent as Wind} from '../../images/wind.svg';
import {ReactComponent as Pressure} from '../../images/pressure.svg';
import {ReactComponent as UV} from '../../images/uv.svg';
import {ReactComponent as Sunrise} from '../../images/sunrise.svg';
import {ReactComponent as Sunset} from '../../images/sunset.svg';

function CurrentWeather() {
  const background = sunny;

  return (
    <div className={styles.currentWeather}>
      <div className={styles.temperatureContainer}>
        <p className={styles.temperatureContainer__currentTemperature}>-30 °C</p>
        <p className={styles.temperatureContainer__feelzTemperature}>Feels like: <span className={styles.temperatureContainer__accent}>-30 °C</span></p>
        <div className={styles.twilightContainer}>
          <SVGWrappepr>
            <Sunrise />
          </SVGWrappepr>
          <div>
            <h4 className={styles.twilightContainer__title}>Sunrise</h4>
            <time className={styles.twilightContainer__time}>06:37 AM</time>
          </div>
          <SVGWrappepr>
            <Sunset />
          </SVGWrappepr>
          <div>
            <h4 className={styles.twilightContainer__title}>Sunset</h4>
            <time className={styles.twilightContainer__time}>20:37 PM</time>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.currentWeather__imageContainer}>
          <img className={styles.currentWeather__image} 
            src={background} 
            alt='иконка состояния текущей погоды'/>
        </div>
        <h3 className={styles.currentWeather__title}>Sunny</h3>
      </div>
      <ul className={styles.indicatorsContainer}>
        <li className={styles.indicatorsContainer__item}>
          <SVGWrappepr>
            <Humidity />
          </SVGWrappepr>
          <p className={styles.indicatorsContainer__data}>30 %</p>
          <p className={styles.indicatorsContainer__title}>Humidity</p>
        </li>
        <li className={styles.indicatorsContainer__item}>
          <SVGWrappepr>
            <Wind />
          </SVGWrappepr>
          <p className={styles.indicatorsContainer__data}>50 m/s</p>
          <p className={styles.indicatorsContainer__title}>Wind Speed</p>
        </li>
        <li className={styles.indicatorsContainer__item}>
          <SVGWrappepr>
            <Pressure />
          </SVGWrappepr>
          <p className={styles.indicatorsContainer__data}>10 mmHg</p>
          <p className={styles.indicatorsContainer__title}>Pressure</p>
        </li>
        <li className={styles.indicatorsContainer__item}>
          <SVGWrappepr>
            <UV />
          </SVGWrappepr>
          <p className={styles.indicatorsContainer__data}>8</p>
          <p className={styles.indicatorsContainer__title}>UV</p>
        </li>
      </ul>
    </div>
  );
}

export default CurrentWeather;