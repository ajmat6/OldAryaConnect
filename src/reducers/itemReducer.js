import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../helper/axios";

const initialState = {
    loading: false,
    adding: false,
    deletingItem: false,
    editing: false,
    replying: false,
    items: [],
    userItems: [],
    itemDetails: [],
    error: ''
}


export const addItem = createAsyncThunk('addItem', async (form) => {
    const res = await axiosInstance.post('/addItem', form);
    console.log(res, "additem")
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

export const editItem = createAsyncThunk('editItem', async (form) => {
    const res = await axiosInstance.post('/item/update', form);
    console.log(res)
})

export const foundItem = createAsyncThunk('foundItem', async (form) => {
    const res = await axiosInstance.post('/item/response/add', form);
    console.log(res)
})

export const deleteResponsee = createAsyncThunk('deleteResponse', async (form) => {
    const res = await axiosInstance.post('/item/response/delete', form);
    console.log(res)
})

export const responseReply = createAsyncThunk('responseReply', async (form) => {
    const res = await axiosInstance.post('/item/response/reply', form);
    if(res.status == 200) return true;
})

const itemSlice = createSlice({
    name: 'item',
    initialState: initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(addItem.pending, (state) => {
            state.loading = true
            state.adding = true
        })

        builder.addCase(addItem.fulfilled, (state, action) => {
            state.loading = false
            state.adding = false
        })

        builder.addCase(addItem.rejected, (state, aciton) => {
            state.loading = false
            state.adding = false
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

        builder.addCase(editItem.pending, (state) => {
            state.editing = true
        })

        builder.addCase(editItem.fulfilled, (state, action) => {
            state.editing = false
        })

        builder.addCase(editItem.rejected, (state, aciton) => {
            state.editing = false
        })

        builder.addCase(foundItem.pending, (state) => {
            state.loading = true
        })

        builder.addCase(foundItem.fulfilled, (state, action) => {
            state.loading = false
        })

        builder.addCase(foundItem.rejected, (state, aciton) => {
            state.loading = false
        })

        builder.addCase(deleteResponsee.pending, (state) => {
            state.deletingItem = true
        })

        builder.addCase(deleteResponsee.fulfilled, (state, action) => {
            state.deletingItem = false
        })

        builder.addCase(deleteResponsee.rejected, (state, aciton) => {
            state.deletingItem = false
        })

        builder.addCase(responseReply.pending, (state) => {
            state.replying = true
        })

        builder.addCase(responseReply.fulfilled, (state, action) => {
            state.replying = false
        })

        builder.addCase(responseReply.rejected, (state, aciton) => {
            state.replying = false
        })
    }
})

export default itemSlice.reducer;