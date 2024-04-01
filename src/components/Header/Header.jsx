import SearchForm from '../SearchForm/SearchForm';
import Button from '../Button/Button';
import ThemeCheckbox from '../ThemeCheckbox/ThemeCheckbox';
import styles from './styles.module.scss';

import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCity } from '../../store/cityReducer';
import { fetchGeocoder } from '../../store/cityReducer';
import api from '../../utils/api';

function Header() {
  const dispatch = useDispatch();
  const controllerRef = useRef();

  const searchCities = async function(city, count) {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    try {
      const response = await api.post(`http://localhost:3000/search?name=${city}&count=${count}`, {city, count}, signal)
      const cities = await response.results;
      return cities
    } catch(err) {
      console.log(err);
    }
  }

  function getCurrentPosition() {
    
    // navigator.geolocation.getCurrentPosition((position => {
    //   const coordinates = position.coords;
    //   if(coordinates) {
    //     dispatch(fetchGeocoder({coordinates}))
    //     .then(res => searchCities(res.payload, 1))
    //     .then(res => dispatch(setCurrentCity(res[0])))
    //     .catch(err => console.log(err))
    //   }
    // }), err =>  console.log(err))
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
      console.log('error')
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
    </header>
  );
}

export default Header;