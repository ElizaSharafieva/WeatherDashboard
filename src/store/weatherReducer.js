import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const weatherReducer = createSlice(
  {
    name:'weather',
    initialState: {
      currentWeather: {},
      daysWeather: {},
      hourlyWeather: {},
      sunrise: '',
      sunset: '',
      status: '',
    },
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(fetchCurrentWeather.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
          if(action.payload)
            state.currentWeather = action.payload.currentWeather;
            state.sunrise = action.payload.sunrise;
            state.sunset = action.payload.sunset;
            state.status = 'succeeded'
        })
        .addCase(fetchCurrentWeather.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
        .addCase(fetchDaysWeather.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchDaysWeather.fulfilled, (state, action) => {
          if(action.payload)
            state.daysWeather = action.payload.daysWeather;
            state.status = 'succeeded'
        })
        .addCase(fetchDaysWeather.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }
  }
);

export const fetchCurrentWeather = createAsyncThunk('weather/fetchCurrentWeather', async ({latitude, longitude}) => {
  try {
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?`, {
      params: {
        latitude: latitude,
        longitude: longitude,
        current: 'temperature_2m,is_day,precipitation,rain,snowfall,cloud_cover,relative_humidity_2m,apparent_temperature,pressure_msl,surface_pressure,wind_speed_10m',
        daily: 'sunrise,sunset',
        wind_speed_unit: 'ms',
        timezone: 'auto',
      }
    });
    return {currentWeather: response.data.current, sunrise: response.data.daily.sunrise.shift(), sunset: response.data.daily.sunset.shift()};
  } catch(err) {
    console.log(err);
  }
});

export const fetchDaysWeather = createAsyncThunk('weather/fetchDaysWeather', async ({latitude, longitude, timeZone}) => {
  try {
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?`, {
      params: {
        latitude: latitude,
        longitude: longitude,
        timezone: timeZone,
        daily: 'temperature_2m_max,temperature_2m_min',
      }
    })
    return {daysWeather: response.data.daily};
  } catch(err) {
    console.log(err);
  }
})

export default weatherReducer.reducer;