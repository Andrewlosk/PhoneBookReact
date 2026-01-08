import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth, app } from "../../auth/firebaseConfig";


export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const registerUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(registerUser.user, { displayName: name });
      const token = await registerUser.user.getIdToken();
      


      return {
        user: {
          name: registerUser.user.displayName,
          uid: registerUser.user.uid,
          email: registerUser.user.email,
          
        },
        token: token,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const loginUser = await signInWithEmailAndPassword(auth, email, password);
      const token = await loginUser.user.getIdToken();


      return {
        user: {
          name: loginUser.user.displayName,

          uid: loginUser.user.uid,
          email: loginUser.user.email,
          
        },
        token: token,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

