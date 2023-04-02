import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/postSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
})