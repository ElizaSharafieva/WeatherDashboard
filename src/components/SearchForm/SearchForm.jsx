import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../utils/api';
import styles from './styles.module.scss';
import { setCurrentCity } from '../../store/cityReducer';

function SearchForm() {
  
  const [value, setValue] = useState('');
  const [cities, setСities] = useState([]);
  const searchBox = useRef();
  const controllerRef = useRef();
  const [cursor, setCursor] = useState(0);

  const dispatch = useDispatch();

  function handleChangeValue(evt) {
    setValue(evt.target.value);
  };

  console.log('main render')

  useEffect(() => {
    if (value) {
      searchCities(value)
    }
  }, [value])

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
    console.log('djdjdj')
    dispatch(setCurrentCity(cities[cursor]));
    setValue('');
    setСities([]);
  }

  const searchCities = async function(city) {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    try {
      const response = await api.post(`http://localhost:3000/search?name=${city}`, signal)
      const cities = await response.results;
      cities ? setСities(response.results) : setСities([])
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <form className={styles.searchForm} onSubmit={evt => evt.preventDefault()}>
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
          onChange={handleChangeValue}
          value={value}
          ref = {searchBox}
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
                  className={`${styles.searchForm__item} ${cursor === i ? styles.active : null}`} 
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