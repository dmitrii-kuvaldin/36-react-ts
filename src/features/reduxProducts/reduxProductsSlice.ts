
import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './reduxProductsAction';
import { Iproduct } from './types';


interface IproductSlice {
  products: Iproduct[];
  isLoading: boolean,
  error: string;
}

const initialState: IproductSlice = {
  products: [],
  isLoading: false,
  error: '',
};


export const reduxProductsSlice = createSlice({
  name: 'reduxProducts',
  initialState,
  reducers: {
    cleanProducts:(state) => {
      state.products = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.payload as string;
      });
  },
});

export default reduxProductsSlice;

export const { cleanProducts } = reduxProductsSlice.actions

