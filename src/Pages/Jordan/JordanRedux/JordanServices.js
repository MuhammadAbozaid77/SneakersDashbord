
import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, addDoc } from "@firebase/firestore"; 
import { getDownloadURL, listAll, ref , uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid'; 
import { db , storage } from './../../../ConfigFiles/FirebaseDataConfig';


const JordanCollectionRef = collection( db , "jordan");
const imagesFolderRef = ref(storage, '');


/* ---------------------------------------------Get Final Jordan Data -----------------------------------------*/
export const get_final_Jordan_Data = createAsyncThunk( "JordanSlice/get_final_Jordan_Data"  , async (state , thunkApi)=>{
  try {
      return thunkApi.fulfillWithValue("Data Edited");
  } 
  catch (error) {
      return thunkApi.rejectWithValue(error);
  }
});
/* ---------------------------------------------Create Jordan Data FireStore -----------------------------------------*/
export const create_Jordan_Data = createAsyncThunk( "JordanSlice/create_Jordan_Data"  , async (state , thunkApi)=>{
  try {
    await addDoc( JordanCollectionRef ,  {
                        folderName   :  state.productName,
                        productName  :  state.productName,
                        price        : state.productprice,
                      }
                )
      return thunkApi.fulfillWithValue("Data Sended");
  } 
  catch (error) {
      return thunkApi.rejectWithValue(error);
  }
});
/* ---------------------------------------------Create Jordan Images Folder -----------------------------------------*/
export const create_Jordan_Images_folder = createAsyncThunk( "JordanSlice/create_Jordan_Images_folder"  , async (state , thunkApi)=>{
  try {
      // add Images to Firebase
    if (state.productName && state.productImages.length > 0) {
      const storageRef = ref(storage, `${state.productName}/`);
  
      const uploadPromises = Array.from(state.productImages).map(async (image) => {
        const imageRef = ref(storageRef, `${v4()}_${image.name}`);
        await uploadBytes(imageRef, image);
      });
  
      try {
        await Promise.all(uploadPromises);
        console.log("Images uploaded successfully");
      } catch (error) {
        console.error("Error uploading images", error);
      }
    } else {
      console.error("Please provide both a product name and images to upload");
    }
  } 
  catch (error) {
      return thunkApi.rejectWithValue(error);
  }

});
/* ---------------------------------------------Get Data FireStore -----------------------------------------------------*/
export const getJordan_Data = createAsyncThunk( "JordanSlice/getJordan_Data"  , async (state , thunkApi)=>{
    try {
        const responce = await getDocs(JordanCollectionRef);
        const data = responce.docs.map((doc)=>( { ...doc.data() , id : doc.id } ));
        
        return thunkApi.fulfillWithValue(data);
    } 
    catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});
/* --------------------------------------------Get Images Folders Storage -----------------------------------------------------*/
export const getJordan_Images = createAsyncThunk('JordanSlice/getJordan_Images', async (state, thunkApi) => {
    try {
      const result = await listAll(imagesFolderRef);
      const folderPromises = result.prefixes.map(async (folderRef) => {
        const folderName = folderRef.name;
        const imagePromises = (await listAll(folderRef)).items.map((itemRef) =>
          getDownloadURL(itemRef).then((url) => url)
        );

        const imageUrls = await Promise.all(imagePromises);

        return { folderName, imageUrls };
      });

      const folders = await Promise.all(folderPromises);

      return thunkApi.fulfillWithValue(folders);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

