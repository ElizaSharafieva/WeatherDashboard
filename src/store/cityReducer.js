import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const cityReducer = createSlice(
  {
    name: 'city',
    initialState: {
      cityName: localStorage.getItem('cityName') || 'Уфа',
      latitude: 0,
      longitude: 0,
      timeZone: localStorage.getItem('timeZone') || 'Asia/Yekaterinburg',
    },
    reducers: {
      setCurrentCity: (state, action) => 
      {
        if (action.payload) {
          const {name, latitude, longitude, timezone} = action.payload;
          state.cityName = name;
          state.latitude = latitude;
          state.longitude = longitude;
          state.timeZone = timezone;
          console.log(latitude, longitude)
        }
      },
    },
    extraReducers(builder) {
      builder
        .addCase(fetchGeocoder.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchGeocoder.fulfilled, (state, action) => {
          state.status = 'succeeded'
          if (action.payload) {
            state.cityName = action.payload;
            // console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
          }
        })
        .addCase(fetchGeocoder.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }
  }
)

export const fetchGeocoder = createAsyncThunk('city/fetchGeocoder', async( {coordinates} ) => {
  const {latitude, longitude} = coordinates;
  console.log(latitude, longitude)
  try {
    // const response = await api.post(`https://geocode-maps.yandex.ru/1.x/?apikey=58044af2-ad47-4114-8415-36ced869c50b&geocode=${longitude},${latitude}&format=json&kind=locality&results=1`)
    // return response.response.GeoObjectCollection.featureMember[0].GeoObject.name;
  } catch(err) {
    console.log(err);
  }
})

export default cityReducer.reducer;
export const {setCurrentCity} = cityReducer.actions;