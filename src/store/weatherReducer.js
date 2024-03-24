const { createSlice } = require("@reduxjs/toolkit");

const weatherReducer = createSlice(
  {
    name:'weather',
    initialState: {
      currentWeather: {},
      daysWeather: {},
      hourlyWeather: {},
    },
    reducers: {},
    extraReducers(builder) {
      // builder
      //   .addCase(fetchCurrentWeather.pending, (state, action) => {
      //     state.status = 'loading'
      //   })
      //   .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
      //     if(action.payload)
      //     state.currentWeather = action.payload.currentWeather;
      //     state.status = 'succeeded'
      //     state.cityName = action.payload.name
      //     state.latitude = action.payload.latitude
      //     state.longitude = action.payload.longitude
      //     state.time = action.payload.timeZone;
      //   })
      //   .addCase(fetchCurrentWeather.rejected, (state, action) => {
      //     state.status = 'failed'
      //     state.error = action.error.message
      //   })
    }
  }
);

export default weatherReducer.reducer;