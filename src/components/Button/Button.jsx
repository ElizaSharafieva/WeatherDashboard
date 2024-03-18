import styles from './styles.module.scss';
import locationIcon from '../../images/locationIcon.png';


function Button() {
  return (
    <button 
      className={styles.button} 
      type='submit'
    >
      <img src={locationIcon} alt="иконка местоположения" />
      Current Location
    </button>
  );
}

export default Button;