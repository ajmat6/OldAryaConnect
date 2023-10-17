import {configureStore} from '@reduxjs/toolkit'
import userAuthReducer from '../reducers/userAuthReducer';
import notesUserReducer from '../reducers/notesUserReducer';

const store = configureStore({
    reducer: {
        auth: userAuthReducer,
        uNotes: notesUserReducer
    }
})

export default store;