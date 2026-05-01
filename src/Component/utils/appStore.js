import { configureStore } from '@reduxjs/toolkit'
import CartReducer from "./Slice"
  const appStore = configureStore({
  reducer: {
    cart:CartReducer,
  },
})
export default appStore;