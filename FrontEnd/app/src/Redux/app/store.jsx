import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import cartSlice from "../features/cartSlice";

// Load cart state from session storage
const loadCartState = () => {
  try {
    const serializedState = sessionStorage.getItem("cartState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save cart state to session storage
const saveCartState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("cartState", serializedState);
  } catch (err) {
   
  }
};

const store = configureStore({
  reducer: {
    user: userSlice,
    allCart: cartSlice
  },
  preloadedState: {
    allCart: loadCartState()
  }
});

store.subscribe(() => {
  const { allCart } = store.getState();
  saveCartState(allCart);
});

export { store };