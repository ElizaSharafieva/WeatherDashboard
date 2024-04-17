import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';
import { setCurrentCity } from '../../store/cityReducer';

function SearchForm(props) {
  
  const [value, setValue] = useState('');
  const [cities, setСities] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [placeholder, setPlaceholder] =  useState('Search for your preffered city...');

  const dispatch = useDispatch();
  const cityName = useSelector(state => state.city.cityName);

  function handleChangeValue(evt) {
    setValue(evt.target.value);
  };

  useEffect(() => {
    if (value) {
      props.searchCities(value, 5)
      .then(cities => cities ? setСities(cities) : setСities([]))
    }
  }, [value, props])

  useEffect(() => {
    if (!cityName || cityName === 'Москва') 
    props.getCurrentPosition()
  }, [])

  const onKeyDown = (e) => {
    if (cities.length > 0)
    if (e.key === 'ArrowDown') {
      setCursor(prevState =>
        prevState < cities.length - 1 ? prevState + 1 : prevState
      );
    } else if (e.key === 'ArrowUp') {
      setCursor(
        prevState => prevState > 0 ? prevState - 1 : prevState
      );
    } else if (e.key === 'Enter') {
      handleAddCity();
    }
  }

  function handleAddCity() {
    dispatch(setCurrentCity(cities[cursor]))
    setValue('');
    setСities([]);
  }

  function handleSearchCity() {
    if (value)
      props.searchCities(value, 5)
        .then (res => {if (!res) setValue('')})
        .then (setPlaceholder('Город не найден'))
  }

  return (
    <form className={styles.searchForm} onSubmit={evt => evt.preventDefault()}>
      <div className={styles.searchForm__container}>
        <button 
          className={styles.searchForm__button} 
          type='submit'
          onClick={handleSearchCity}
        >
        </button>
        <input
          className={styles.searchForm__input}
          type='text' 
          placeholder={placeholder}
          id="search-input"
          name="search-input"
          onChange={handleChangeValue}
          value={value}
          onKeyDown={onKeyDown}
        >
        </input>
      </div>
      {cities.length > 0 ? 
        <ul className={styles.searchForm__list}>
          {
            cities.map((city,i) => {
              return (
                <li key={city.id}
                  className={`${styles.searchForm__item} ${cursor === i ? styles.active : ''}`} 
                  onMouseOver={() => setCursor(i)}
                  onClick={handleAddCity}
                >
                  <div className={styles.searchForm__data}>{city.name},</div>
                  <div className={styles.searchForm__data}>{city.admin1}</div>
                </li>)
            })
          }
        </ul>
        :
        ''
      }
    </form>
  );
}

export default SearchForm;