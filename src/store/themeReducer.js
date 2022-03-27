import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: localStorage.getItem('themeMode'),
    color: localStorage.getItem('themeColor'),
};


const themeReducer = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        setMode(state, actions) {
            return {
                ...state,
                mode: actions.payload,
            };
        },
        setColor(state, actions) {
            return {
                ...state,
                color: actions.payload,
            }
        }
    }
});

export const { setMode, setColor } = themeReducer.actions;
export default themeReducer.reducer;