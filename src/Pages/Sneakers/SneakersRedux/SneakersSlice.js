
import { createSlice } from '@reduxjs/toolkit'
import { create_Sneakers_Data, create_Sneakers_Images_folder, getSneakers_Data, 
            getSneakers_Images, get_final_Sneakers_Data } from './SneakersServices';

const Initial_Sneakers_Data = {
  SneakersData : [],
  SneakersFolderImages : [],
  FinalSneakersData : []
}

const SneakersSlice = createSlice({
  name: 'SneakersSlice',
  initialState: Initial_Sneakers_Data,
  extraReducers:(builder)=>{
/* ---------------------------------------------Get Final Sneakers Data -----------------------------------------*/
    builder.addCase(get_final_Sneakers_Data.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    })

    builder.addCase(get_final_Sneakers_Data.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.FinalSneakersData = state.SneakersData?.filter(
              (obj1) => state.SneakersFolderImages.some((obj2) => obj2.folderName === obj1.folderName)).map((obj1) => ({
            ...obj1,
            ...state.SneakersFolderImages?.find((obj2) => obj2.folderName === obj1.folderName),
          }));
      state.errors = null;
    })

    builder.addCase(get_final_Sneakers_Data.rejected, (state) => {
      state.isLoading = false;
      state.errors = [{ msg: "something went wrong!" }];
    })
    /* ----------------------------------------------- Create Sneakers Data ------------------------------------------- */
    builder.addCase(create_Sneakers_Data.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    })

    builder.addCase(create_Sneakers_Data.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      state.errors = null;
    })

    builder.addCase(create_Sneakers_Data.rejected, (state) => {
      state.isLoading = false;
      state.errors = [{ msg: "something went wrong!" }];
    })
/* ---------------------------------------------Create Sneakers Images Folder -----------------------------------------*/
builder.addCase(create_Sneakers_Images_folder.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    })

    builder.addCase(create_Sneakers_Images_folder.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.errors = null;
    })

    builder.addCase(create_Sneakers_Images_folder.rejected, (state) => {
      state.isLoading = false;
      state.errors = [{ msg: "something went wrong!" }];
    })
/* ------------------------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------------------------ */
  /* ----------------------------------------------- Get Sneakers Data ------------------------------------------- */
    builder.addCase(getSneakers_Data.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    })

    builder.addCase(getSneakers_Data.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.SneakersData = (payload) || [];
      state.errors = null;
    })

    builder.addCase(getSneakers_Data.rejected, (state) => {
      state.isLoading = false;
      state.errors = [{ msg: "something went wrong!" }];
    })
/* ----------------------------------------------- Get Sneakers Images Folder ------------------------------------------- */
    builder.addCase(getSneakers_Images.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    })

    builder.addCase(getSneakers_Images.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.SneakersFolderImages = payload;
      state.errors = null;
    })

    builder.addCase(getSneakers_Images.rejected, (state) => {
      state.isLoading = false;
      state.errors = [{ msg: "something went wrong!" }];
    })
  }
});

export default  SneakersSlice.reducer;