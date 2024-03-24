import { createSlice } from "@reduxjs/toolkit";

const cityReducer = createSlice(
  {
    name: 'city',
    initialState: {
      cityName: 'Уфа',
      latitude: '54.74306,',
      longitude: 'longitude',
      timeZone: 'Asia/Yekaterinburg',
    },
    reducers: {
      setCurrentCity: (state, action) => 
      {
        if (action.payload) {
          console.log(action.payload)
          const {name, latitude, longitude, timezone} = action.payload;
          state.cityName = name;
          state.latitude = latitude;
          state.longitude = longitude;
          state.timeZone = timezone;
        }
      },
    }
  }
)

export default cityReducer.reducer;
export const {setCurrentCity} = cityReducer.actions;