import { createSlice } from '@reduxjs/toolkit';
import { IUserData } from '../../components/auth/Auth';
import { getUserWithToken, loginUser } from './authAction';


interface IUserState {
  user: IUserData
  isLoading: boolean
  error: string
}


const initialUser: IUserData = {
  id: 0,
  username: '',
  gender: '',
  email: '',
  image: '',
  firstName: '',
  lastName: '',
  refreshToken: '',
  token: ''
}

const initialState: IUserState = {
  user: initialUser,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = initialUser
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.user = initialUser
        state.error = action.payload as string
      })
      .addCase(getUserWithToken.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload;
      })
      .addCase(getUserWithToken.pending, (state) => {
        state.isLoading = true;
      })

  },
});

export default authSlice;

// экспорт синхронных actions из нашего slice
export const { logoutUser } = authSlice.actions
