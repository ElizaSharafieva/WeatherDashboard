import styles from './styles.module.scss';

function SearchForm() {

  return (
    <form className={styles.searchForm}>
      <div className={styles.searchForm__container}>
        <button 
          className={styles.searchForm__button} 
          type='submit'
        >
        </button>
        <input 
          className={styles.searchForm__input}
          type='text' 
          placeholder='Search for your preffered city...' 
          id="search-input"
          name="search-input"
        >
        </input>
      </div>
    </form>
  );
}

export default SearchForm;