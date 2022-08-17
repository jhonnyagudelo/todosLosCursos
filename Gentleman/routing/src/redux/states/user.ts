import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";
import { persistLocalStorage, clearLocalStorage } from "../../Utilities/";

export const EmptyUserState: UserInfo = {
  id: 0,
  name: "",
  email: "",
};

export const UserKey = "user";

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage<UserInfo>(UserKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const res = {
        ...state,
        ...action.payload,
      };
      persistLocalStorage<UserInfo>(UserKey, res);
      return res;
    },
    resetUser: () => {
      clearLocalStorage(UserKey);
      return EmptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
