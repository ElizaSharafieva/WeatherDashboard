import styles from './styles.module.scss';
import locationIcon from '../../images/locationIcon.png';
import { useResize } from '../../hooks/useResize';


function Button(props) {

  const windowWith = useResize();

  return (
    <button 
      className={styles.button} 
      type='submit'
      onClick={props.getCurrentPosition}
    >
      <img src={locationIcon} alt="иконка местоположения" />
      {windowWith > 980 ? 'Current Location' : ''}
    </button>
  );
}

export default Button;