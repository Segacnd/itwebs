import { configureStore } from '@reduxjs/toolkit'
import { mainReducer } from './reducers'

export const makeStore = () => {
  return configureStore({
    reducer: {mainReducer}
  })
}