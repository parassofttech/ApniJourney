import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  travels:  localStorage.getItem("travels")?
  JSON.parse(localStorage.getItem("travels")):[]
}

export const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    increment: (state,action) => {
     const travel = action.payload
     state.travels= travel
     localStorage.setItem("travelId",JSON.stringify(state.travels))
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = travelSlice.actions

export default travelSlice.reducer