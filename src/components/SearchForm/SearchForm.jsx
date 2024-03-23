import { useState, useEffect, useRef, createRef } from 'react';

import useKeyPress from '../../hooks/useKeyPress';
import api from '../../utils/api';
import styles from './styles.module.scss';

function SearchForm() {
  
  const [value, setValue] = useState('');
  const [cities, setСities] = useState([]);
  const controllerRef = useRef();
  const [cursor, setCursor] = useState(0);
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");
  const [selected, setSelected] = useState('');

  function handleChangeValue(evt) {
    setValue(evt.target.value);
  };

  useEffect(() => {
    if (value) {
      searchCities(value)
    }
  }, [value])

  useEffect(() => {
    if (cursor < cities.length - 1 &&  downPress) {
      setCursor(prevState =>
        prevState < cities.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress && cities.length > 0]);


  useEffect(() => {
    if (cursor > 0 && upPress) {
      setCursor(
        prevState => prevState > 0 ? prevState - 1 : prevState
      );
    }
  }, [upPress && cities.length > 0]);

  useEffect(() => {
    if (enterPress) {
      setSelected(cities[cursor]);
    }
  }, [cursor, enterPress && cities.length > 0]);

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