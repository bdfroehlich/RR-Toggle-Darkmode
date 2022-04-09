import { createSlice } from "@reduxjs/toolkit";

const darkMode = {
    darkMode: true,
    color1: '#293132',
    color2: '#474044',
    color3: '#4F5165',
    color4: '#547AA5',
    color5: '#50D8D7',
    photo: 'https://www.placecage.com/200/250',
}

const lightMode = {
    darkMode: false,
    color1: '#6E44FF',
    color2: '#B892FF',
    color3: '#FFC2E2',
    color4: '#FF90B3',
    color5: '#EF7A85',
    photo: 'https://www.placecage.com/300/300'
}

const initialState = lightMode;

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        darkModeOn: () => {
            return darkMode;
        },
        lightModeOn: () => {
            return lightMode;
        },
    },
});

export const { darkModeOn, lightModeOn } = modeSlice.actions

export default modeSlice.reducer