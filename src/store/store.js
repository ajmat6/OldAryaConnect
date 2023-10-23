import {configureStore} from '@reduxjs/toolkit'
import userAuthReducer from '../reducers/userAuthReducer';
import notesUserReducer from '../reducers/notesUserReducer';
import itemReducer from '../reducers/itemReducer';

const store = configureStore({
    reducer: {
        auth: userAuthReducer,
        uNotes: notesUserReducer,
        item: itemReducer
    }
})

export default store;