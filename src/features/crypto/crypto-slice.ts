/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const loadCrypto = createAsyncThunk('@@crypto/load-crypto', async () => {
  const storeAsync = await AsyncStorage.getItem('crypto');
  const dataStorage = JSON.parse(String(storeAsync));
  const data = dataStorage
    ? dataStorage
    : await axios
        .get(
          'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20',
          {
            headers: {
              'X-CMC_PRO_API_KEY': 'ae023699-6910-4efa-8e69-cc5354bd2d6d',
            },
          },
        )
        .then(res => res.data);
  const jsonValue = JSON.stringify(data);
  await AsyncStorage.setItem('crypto', jsonValue);

  return data;
});

export interface cryptoState {
  status: string;
  error: string | null;
  list: any;
}

const initialState: cryptoState = {
  status: 'idle',
  error: '',
  list: [],
};

export const cryptoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loadCrypto.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCrypto.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = String(action.payload || action.meta);
      })
      .addCase(loadCrypto.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload.data;
      }),
});

export const cryptoReducer = cryptoSlice.reducer;

export const selectAllUsers = (state: {crypto: cryptoState}): cryptoState =>
  state.crypto;
