import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  bookingDate: null,
  movieId: null,
  cinemaId: null,
  movieSchedulesId: null,
  fullName: null,
  email: null,
  phoneNUm: null,
  statusId: null,
  paymentMethodId: null,
  seatNum: null,
  time:null,
  cinemaName:null,
  price:null,
  cinemaPicture:null,
  movieTitle:null,
  totalPrice:null
};

const transactionReducer = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    transaction: (state, action) => {
      state.bookingDate = action.payload.bookingDate;
      state.movieId = action.payload.movieId;
      state.userId = action.payload.userId;
      state.cinemaId = action.payload.cinemaId;
      state.movieSchedulesId = action.payload.movieSchedulesId;
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.phoneNUm = action.payload.phoneNUm;
      state.statusId = action.payload.statusId;
      state.paymentMethodId = action.payload.paymentMethodId;
      state.seatNum = action.payload.seatNum;
      state.time = action.payload.time;
      state.cinemaName = action.payload.cinemaName;
      state.price = action.payload.price;
      state.cinemaPicture = action.payload.cinemaPicture;
      state.movieTitle = action.payload.movieTitle;
      state.totalPrice = action.payload.totalPrice;
    },
    cancelTransaction: (state, {payload}) => {
      return initialState;
    },
  },
  extraReducers: build => {},
});

export const {transaction, cancelTransaction} = transactionReducer.actions;

export default transactionReducer.reducer;
