import styles from './styles.module.scss';
import locationIcon from '../../images/locationIcon.png';


function Button(props) {
  return (
    <button 
      className={styles.button} 
      type='submit'
      onClick={props.getCurrentPosition}
    >
      <img src={locationIcon} alt="иконка местоположения" />
      Current Location
    </button>
  );
}

export default Button;