import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  dataItem: null,
  loading: false,
  error: null,
};

// Create the async thunk to fetch the finance data item
export const fetchFinanceDataItem = createAsyncThunk(
  "financeDataItem/fetchFinanceDataItem",
  async (queryParams) => {
    try {
      const baseUrl = "http://localhost:8000/api/investor/commitment";
      const url = `${baseUrl}/${queryParams}`;
      const response = await fetch(url);

      const data = await response.json();
      return data;
    } catch (error) {
      throw Error("Failed to fetch finance data item");
    }
  }
);

// Create the financeDataItem slice
const financeDataItemSlice = createSlice({
  name: "financeDataItem",
  initialState,
  reducers: {
    // Add any extra reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFinanceDataItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFinanceDataItem.fulfilled, (state, action) => {
        state.loading = false;
        state.dataItem = action.payload;
      })
      .addCase(fetchFinanceDataItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the financeDataItem actions and reducer
export const {
  /* Add any extra actions here */
} = financeDataItemSlice.actions;
export default financeDataItemSlice.reducer;
