import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { rootReducer } from '.'

console.log(rootReducer)
const store = configureStore({ reducer: rootReducer })

export default store
