import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../features/userSlice'
import cartSlice from '../features/cartSlice'


const store = configureStore({
  reducer: {
    user: userSlice,
    allCart: cartSlice
  },
});


export { store };