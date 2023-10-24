import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../helper/axios";

const initialState = {
    loading: false,
    items: [],
    userItems: [],
    itemDetails: [],
    error: ''
}


export const addItem = createAsyncThunk('addItem', async (form) => {
    const res = await axiosInstance.post('/addItem', form);
    console.log(res)
})

export const getAllItems = createAsyncThunk('getAllItems', async () => {
    const res = await axiosInstance.get('/getItems');
    return res.data
})

export const getItemsByUser = createAsyncThunk('getItemsByUser', async () => {
    const res = await axiosInstance.get('/user/getItems');
    return res.data
})

export const getItemById = createAsyncThunk('getItemById', async (id) => {
    const res = await axiosInstance.get(`/getItem/${id}`);
    return res.data
})

export const deleteItem = createAsyncThunk('deleteItem', async (id) => {
    const res = await axiosInstance.delete(`/deleteItem/${id}`);
    return true
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

        builder.addCase(getItemsByUser.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getItemsByUser.fulfilled, (state, action) => {
            state.loading = false
            state.userItems = action.payload
        })

        builder.addCase(getItemsByUser.rejected, (state, aciton) => {
            state.loading = false
        })

        builder.addCase(getItemById.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getItemById.fulfilled, (state, action) => {
            state.loading = false
            state.itemDetails = action.payload
        })

        builder.addCase(getItemById.rejected, (state, aciton) => {
            state.loading = false
        })

        builder.addCase(deleteItem.pending, (state) => {
            state.loading = true
        })

        builder.addCase(deleteItem.fulfilled, (state, action) => {
            state.loading = false
        })

        builder.addCase(deleteItem.rejected, (state, aciton) => {
            state.loading = false
        })
    }
})

export default itemSlice.reducer;