import SearchForm from '../SearchForm/SearchForm';
import Button from '../Button/Button';
import AttentionPopup from '../AttentionPopup/AttentionPopup';
import ThemeCheckbox from '../ThemeCheckbox/ThemeCheckbox';
import styles from './styles.module.scss';

import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentCity } from '../../store/cityReducer';
import { fetchGeocoder } from '../../store/cityReducer';
import api from '../../utils/api';

function Header() {
  const dispatch = useDispatch();
  const controllerRef = useRef();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function closePopup() {
    setIsPopupOpen(false)
  }

  const searchCities = async function(city, count) {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    https://nodejs-serverless-function-express-six-indol.vercel.app/

    try {
      const response = await api.post(`https://nodejs-serverless-function-express-six-indol.vercel.app/search?name=${city}&count=${count}`, {city, count}, signal)
      const cities = await response.results;
      return cities
    } catch(err) {
      console.log(err);
    }
  }

  function getCurrentPosition() {

    navigator.geolocation.getCurrentPosition(updatePosition, errorPosition)
    
    function updatePosition(position) {
      const coordinates = position.coords;
      if(coordinates) {
        dispatch(fetchGeocoder({coordinates}))
        .then(res => searchCities(res.payload, 1))
        .then(res => dispatch(setCurrentCity(res[0])))
        .catch(err => console.log(err))
      }
    }

    function errorPosition() {
      setIsPopupOpen(true)
    }
  }

  return (
    <header className={styles.header}>
      <ThemeCheckbox />
      <SearchForm 
        searchCities={searchCities}
        getCurrentPosition={getCurrentPosition}
      />
      <Button 
        getCurrentPosition={getCurrentPosition}
      />
      <AttentionPopup 
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
    </header>
  );
}

export default Header;