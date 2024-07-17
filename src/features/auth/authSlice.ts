import { createSlice } from '@reduxjs/toolkit';
import { IUserData } from '../../components/auth/Auth';
import { getUserWithToken, loginUser } from './authAction';

// типизируем объект, который мы положим в store
// в нем будут данные с сервера + переключатель лоадера и сообщение из ошибки
interface IUserState {
  user: IUserData
  isLoading: boolean
  error: string
}

// создаем начальное значение для данных пользователя
// этот шаблон заменится на реальные данные после успешного запроса
// нужен чтобы ts не ругался
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

// создаем объект-начальное значение
const initialState: IUserState = {
  user: initialUser,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
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
      // в случае вызова getUserWithToken() к нам приходят данные о юзере
      // мы записываем их  в тот же стейт
      .addCase(getUserWithToken.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload;
      })

  },
});

export default authSlice;
// export const { } = authSlice.actions
