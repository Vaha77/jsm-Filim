import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
    name: 'genreOrCategory',
    initialState: {
        genreOrCategoryName:'',
        page: 1,
        searchQuery: '',

    },
    reducers:{
        selectGenreOrCategory:()
    }
})