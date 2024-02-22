import { createSlice } from '@reduxjs/toolkit'
import { Send_Loggin_Data, Send_Registeration_Data, handel_Registiration_Successful } from './AuthReduxServices';
// import { auth } from '../../../ConfigFiles/FirebaseDataConfig';

const InitialAuthData = {
    isRegister : "" ,
    isLogged : "" ,
    token : "" ,
    errorMessage : ""
};


const AuthSlice = createSlice({
    name: 'authSlice',
    initialState: InitialAuthData,
    extraReducers: (builder)=>{
/* ---------------------------------------------------------------------------------------------------------- */
        builder.addCase(Send_Registeration_Data.pending, (state) => {
            state.isLoading = true;
            state.errors = null;
          })
      
          builder.addCase(Send_Registeration_Data.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.isRegister  = payload.user.accessToken;
            state.errors = null;
          })
      
          builder.addCase(Send_Registeration_Data.rejected, (state ,action) => {
            state.isLoading = false;
            console.log(action);
            state.errorMessage = action.payload.messgae;
            state.errors = [{ msg: "something went wrong!" }];
          })
/* ---------------------------------------------------------------------------------------------------------- */
        builder.addCase(Send_Loggin_Data.pending, (state) => {
            state.isLoading = true;
            state.errors = null;
          })
      
          builder.addCase(Send_Loggin_Data.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.errors = null;
          })
      
          builder.addCase(Send_Loggin_Data.rejected, (state) => {
            state.isLoading = false;
            state.errors = [{ msg: "something went wrong!" }];
          })
/* ---------------------------------------------------------------------------------------------------------- */
          builder.addCase(handel_Registiration_Successful.fulfilled, (state, { payload }) => {
            state.isRegister = null;
            state.errorMessage = null;
          });
/* ---------------------------------------------------------------------------------------------------------- */

    }
});



export default AuthSlice.reducer ;