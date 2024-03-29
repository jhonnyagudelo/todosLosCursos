import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name:'auth',
  initialState:{
    status:'not-authenticated',
    uid: null,
    displayName:null,
    photoURL:null,
    errorMenssage:null,
  },
  reducers:{
    login: (state, action) =>{
        
    },
    logout:(state, payload) => {

    },
    checkingCredentials:(state) => {

    }
  }
});
export const { login, logout, checkingCredentials } = authSlice.actions;
