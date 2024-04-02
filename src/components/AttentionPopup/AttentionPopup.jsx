import styles from './styles.module.scss';

function AttentionPopup(props) {

  return (
    <div className={`${styles.popup} ${props.isOpen ? styles.popup_opened : ''}`}>
      <div className={styles.popup__container}>
        <h2 className={styles.popup__title}>Разрешите доступ к геопозиции</h2>
        <button 
          type="submit" 
          className={styles.popup__button}
          onClick={props.onClose}
        >
          OK
        </button>
      </div>
    </div>
  )
}

export default AttentionPopup;