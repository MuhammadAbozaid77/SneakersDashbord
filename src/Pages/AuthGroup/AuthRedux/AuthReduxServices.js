
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../../ConfigFiles/FirebaseDataConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';


/* ---------------------------------------------Get Final Jordan Data -----------------------------------------*/
export const Send_Registeration_Data = createAsyncThunk( "authSlice/Send_Registeration_Data"  , async (args , thunkApi)=>{
    try {
        const data = await createUserWithEmailAndPassword( auth , args.userEmail , args.userPassword );
        return thunkApi.fulfillWithValue(data);
    } 
    catch (error) {
        return thunkApi.rejectWithValue(error);
    }
  });
/* ---------------------------------------------Get Final Jordan Data -----------------------------------------*/
export const Send_Loggin_Data = createAsyncThunk( "authSlice/Send_Loggin_Data"  , async (state , thunkApi)=>{
    try {


        return thunkApi.fulfillWithValue("data");
    } 
    catch (error) {
        return thunkApi.rejectWithValue(error);
    }
  });
/* ---------------------------------------------Get Final Jordan Data -----------------------------------------*/
export const handel_Registiration_Successful = createAsyncThunk( "authSlice/handel_Registiration_Successful"  , 
                                            async (state , thunkApi)=>{

  });