
import {configureStore } from '@reduxjs/toolkit';
import JordanSlice  from './../Pages/Jordan/JordanRedux/JordanSlice';
import AuthReduxSlice from '../Pages/AuthGroup/AuthRedux/AuthReduxSlice';
import SneakersSlice from '../Pages/Sneakers/SneakersRedux/SneakersSlice';

export const ReduxStore = configureStore({
    reducer : {
        "Jordan_In_Redux" : JordanSlice  ,
        "Auth_In_Redux" : AuthReduxSlice  ,
        "Sneakers_In_Redux" : SneakersSlice  ,
    }
});
