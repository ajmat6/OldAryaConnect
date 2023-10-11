import {configureStore} from '@reduxjs/toolkit'
import userAuthReducer from '../reducers/userAuthReducer';

const store = configureStore({
    reducer: {
        auth: userAuthReducer
    }
})

export default store;