import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../helper/axios";

const initialState = {
    loading: false,
    items: [],
    error: ''
}


export const addItem = createAsyncThunk('addItem', async (form) => {
    const res = await axiosInstance.post('/addItem', form);
    console.log(res)
})

export const getAllItems = createAsyncThunk('getAllItems', async (form) => {
    const res = await axiosInstance.get('/getItems', form);
    return res.data
})


const itemSlice = createSlice({
    name: 'item',
    initialState: initialState,
    reducer: {

    },

    extraReducers: (builder) => {
        builder.addCase(addItem.pending, (state) => {
            state.loading = true
        })

        builder.addCase(addItem.fulfilled, (state, action) => {
            state.loading = false

        })

        builder.addCase(addItem.rejected, (state, aciton) => {
            state.loading = false
        })

        builder.addCase(getAllItems.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getAllItems.fulfilled, (state, action) => {
            state.loading = false
            state.items = action.payload
        })

        builder.addCase(getAllItems.rejected, (state, aciton) => {
            state.loading = false
        })
    }
})

export default itemSlice.reducer;