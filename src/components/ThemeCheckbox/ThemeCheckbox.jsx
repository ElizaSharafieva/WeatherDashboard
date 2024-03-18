import styles from './styles.module.scss';

function ThemeCheckbox() {
  const theme = 'Dark'

  return (
    <div className={styles.checkboxContainer} >
      <div className={styles.checkbox}>
        <input 
          className={styles.checkbox__input}
          checked={theme === 'Dark'}
          id='theme-checkbox' 
          type='checkbox'></input>
        <span 
          className={`${styles.slider} ${styles.round}`}> 
        </span>
      </div>
      <label className={styles.checkbox__label} htmlFor='theme-checkbox'>
        {theme} Mode
      </label>
    </div>
   
  );
}

export default ThemeCheckbox;