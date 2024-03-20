import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem('theme') || 'Dark'
};

const themeReducer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === 'Light' ? 'Dark' : 'Light';
    }
  }
})

export default themeReducer.reducer;
export const {toggleTheme} = themeReducer.actions;