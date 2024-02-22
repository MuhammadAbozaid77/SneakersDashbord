
import { createSlice } from '@reduxjs/toolkit'
import { create_Jordan_Data, create_Jordan_Images_folder, getJordan_Data, getJordan_Images, get_final_Jordan_Data } from './JordanServices';

const Initial_Jordan_Data = {
  JordanData : [],
  JordanFolderImages : [],
  FinalJordanData : []
}

const JordanSlice = createSlice({
  name: 'JordanSlice',
  initialState: Initial_Jordan_Data,
  extraReducers:(builder)=>{
/* ---------------------------------------------Get Final Jordan Data -----------------------------------------*/
    builder.addCase(get_final_Jordan_Data.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    })

    builder.addCase(get_final_Jordan_Data.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.FinalJordanData = state.JordanData?.filter(
              (obj1) => state.JordanFolderImages.some((obj2) => obj2.folderName === obj1.folderName)).map((obj1) => ({
            ...obj1,
            ...state.JordanFolderImages?.find((obj2) => obj2.folderName === obj1.folderName),
          }));
      state.errors = null;
    })

    builder.addCase(get_final_Jordan_Data.rejected, (state) => {
      state.isLoading = false;
      state.errors = [{ msg: "something went wrong!" }];
    })
    /* ----------------------------------------------- Create Jordan Data ------------------------------------------- */
    builder.addCase(create_Jordan_Data.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    })

    builder.addCase(create_Jordan_Data.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      state.errors = null;
    })

    builder.addCase(create_Jordan_Data.rejected, (state) => {
      state.isLoading = false;
      state.errors = [{ msg: "something went wrong!" }];
    })
/* ---------------------------------------------Create Jordan Images Folder -----------------------------------------*/
builder.addCase(create_Jordan_Images_folder.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    })

    builder.addCase(create_Jordan_Images_folder.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.errors = null;
    })

    builder.addCase(create_Jordan_Images_folder.rejected, (state) => {
      state.isLoading = false;
      state.errors = [{ msg: "something went wrong!" }];
    })
/* ------------------------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------------------------ */
  /* ----------------------------------------------- Get Jordan Data ------------------------------------------- */
    builder.addCase(getJordan_Data.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    })

    builder.addCase(getJordan_Data.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.JordanData = (payload) || [];
      state.errors = null;
    })

    builder.addCase(getJordan_Data.rejected, (state) => {
      state.isLoading = false;
      state.errors = [{ msg: "something went wrong!" }];
    })
/* ----------------------------------------------- Get Jordan Images Folder ------------------------------------------- */
    builder.addCase(getJordan_Images.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    })

    builder.addCase(getJordan_Images.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.JordanFolderImages = payload;
      state.errors = null;
    })

    builder.addCase(getJordan_Images.rejected, (state) => {
      state.isLoading = false;
      state.errors = [{ msg: "something went wrong!" }];
    })
  }
});

export default  JordanSlice.reducer;