import userAPI from "apis/userAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  user: [],
  isLoading: false,
  error: "",
};
export const getUsers = createAsyncThunk(
  "admin/users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const data = await userAPI.getUsers();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const userManagementSlice = createSlice({
  name: "admin/users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.users = payload;
    });
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});
export default userManagementSlice.reducer;
