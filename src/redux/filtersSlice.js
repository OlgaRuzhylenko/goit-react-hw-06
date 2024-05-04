import {createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        string: '',
    },

    reducers: {
        changeFilter (state, action) {
state.string = action.payload
        },
            }

})
export const {changeFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const selectNameFilter = (state) => state.filter;