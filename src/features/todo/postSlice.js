import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchPostsApi } from './postApi';
import { toast } from 'react-toastify';

const initialState = {
    posts: [],
    status: {
        fetchPosts:{
            isLoading:false,
            isSuccess:false,
            isError:false,
            error:null
        }
    },
   
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (data, { rejectWithValue }) => {
    try {
        const response = await fetchPostsApi(data);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const postSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status.fetchPosts.isError = false;
                state.status.fetchPosts.isLoading = true;
                state.status.fetchPosts.isSuccess = false;
                state.status.fetchPosts.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {

                state.status.fetchPosts.isLoading = false;
                state.posts = state.posts.concat(action.payload);
                state.status.fetchPosts.isSuccess = true;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status.fetchPosts.isError = true;
                state.status.fetchPosts.isLoading = false;
                // toast.error(action?.payload?.message ?? "something went wrong");
                state.status.fetchPosts.error = action?.payload?.errors ?? [];
                state.posts = [];
            })
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = postSlice.actions

export default postSlice.reducer