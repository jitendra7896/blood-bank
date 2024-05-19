import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDonorsAPI } from "../../../services/service";
import { ERROR_MESSAGE } from "../../../constants/constant";

const initialState = {
  donors: undefined,
};
export const getDonors = createAsyncThunk(
  "/getDonors",
  async (thunkAPI) => {
    try {
      return await getDonorsAPI();
    } catch (error) {
      return thunkAPI.rejectWithValue(ERROR_MESSAGE.API_ERROR_MESSAGE);
    }
  }
);

const donorsSlice = createSlice({
  name: "donors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDonors.fulfilled, (state, action) => {
      state.donors = action.payload;
    });
  },
});

export default donorsSlice.reducer;
