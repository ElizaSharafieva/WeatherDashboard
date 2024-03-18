import styles from './styles.module.scss';

function Location() {
  
  return (
    <div className={styles.location}>
      <h2 className={styles.location__title}>Москва</h2>
      <time className={styles.location__time}>
        20:00
      </time>
      <p className={styles.location__date}>
        27 Oct
      </p>
    </div>
  );
}

export default Location;