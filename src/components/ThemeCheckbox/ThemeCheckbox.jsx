import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.scss';

import { toggleTheme } from '../../store/themeReducer';

function ThemeCheckbox() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme)

  return (
    <div className={styles.checkboxContainer} >
      <div className={styles.checkbox}>
        <input
          onChange={()=> dispatch(toggleTheme())}
          className={styles.checkbox__input}
          checked={theme === 'Dark'? true : false}
          id='theme-checkbox' 
          type='checkbox'></input>
        <span 
          onClick={()=> dispatch(toggleTheme())}
          className={`${styles.slider} ${styles.round}`}
        > 
        </span>
      </div>
      <label className={styles.checkbox__label} htmlFor='theme-checkbox'>
        {theme} Mode
      </label>
    </div>
   
  );
}

export default ThemeCheckbox;