import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        title: 'New List',
        movies: [],
        saved: false,
        search: ''
    },
    reducers:{
        addToList: (state, action)=>{
            const existedMovie = state.movies.find((movie)=>movie.id === action.payload.id)
            if(!existedMovie) state.movies = [action.payload,...state.movies]
        },
        setTitle: (state, action)=>{
            state.title = action.payload
        },
        removeFromList: (state, action)=>{
            const id = action.payload
            const filteredMovies = state.movies.filter(movie=>movie.id !== id)
            state.movies = [...filteredMovies]
        },
        setSearch: (state, action)=>{
            state.search = action.payload
        },
        saveList: (state)=>{
            state.saved = true
        }
    }
})

export const movieActions = movieSlice.actions
export default movieSlice.reducer