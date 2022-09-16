import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "apis/movieAPI";

const initialState = {
  tickets: null,
  isLoading: false,
  error: "",
};
export const getTickets = createAsyncThunk(
  "purchase/tickets/getTickets",
  async (showtimeId, { rejectWithValue }) => {
    try {
      const data = await movieAPI.getTicketList(showtimeId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const bookTickets = createAsyncThunk(
  "purchase/tickets/getTickets",
  async (selectedTicket, showtimeId, { rejectWithValue }) => {
    try {
      const data = await movieAPI.getTicketList(showtimeId, selectedTicket);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const ticketSlice = createSlice({
  name: "purchase/tickets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTickets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTickets.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.tickets = payload;
    });
    builder.addCase(getTickets.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
  extraReducers: (builder) => {
    builder.addCase(bookTickets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(bookTickets.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.tickets = payload;
    });
    builder.addCase(bookTickets.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});
export default ticketSlice.reducer;
