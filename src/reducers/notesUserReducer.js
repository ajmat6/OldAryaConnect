import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../helper/axios";

const initialState = {
    loading: false,
    notesTopics: [],
    message: ''
}

export const getFrontTopics = createAsyncThunk('getFrontTopics', async () => {
    const res = await axiosInstance.get('/getnotes');
    // console.log(res.data);
    return res.data
})


const notesSlice = createSlice({
    name: 'notes',
    initialState: initialState,
    reducer: {

    },

    extraReducers: (builder) => {
        builder.addCase(getFrontTopics.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getFrontTopics.fulfilled, (state, action) => {
            state.loading = false
            state.notesTopics = action.payload
        })

        builder.addCase(getFrontTopics.rejected, (state, aciton) => {
            state.loading = false
            state.error = "Products fetching failed"
        })
    }
})

export default notesSlice.reducer;