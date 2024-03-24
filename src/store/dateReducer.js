import { createSlice } from "@reduxjs/toolkit";

const dateReducer = createSlice(
  {
    name: 'date',
    initialState: {
      time: '',
      day: '',
      hour:'',
    },
    reducers: {
      setTime: (state, action) => {
        state.time = action.payload
      },
      setDay: (state, action) => {
        state.day = action.payload
      },
      setHour: (state, action) => {
        state.hour = Number(action.payload)
      }
    }
  }
)

export default dateReducer.reducer;
export const {setTime, setDay, setHour} = dateReducer.actions;