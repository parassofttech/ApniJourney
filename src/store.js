import { configureStore } from '@reduxjs/toolkit'
import travelReducer from './redux/travelSlice'

export const store = configureStore({
  reducer: {
    travel: travelReducer,
  },
})