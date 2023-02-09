import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

//  create redux store and automatically configure redux devtools extension
export default configureStore({
    reducer: {
        counter: counterReducer
    }
});