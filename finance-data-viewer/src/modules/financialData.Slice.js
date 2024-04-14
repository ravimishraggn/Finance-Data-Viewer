import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define the async thunk method
export const getFinancialData = createAsyncThunk(
  "financialData/getFinancialData",
  async () => {
    try {
      // Perform async operation to fetch financial data
      const response = await fetch("http://localhost:8000/api/investors");
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle error
      throw new Error("Failed to fetch financial data");
    }
  }
);

const financialDataSlice = createSlice({
  name: "financialData",
  initialState: {
    // initial state here
  },
  reducers: {
    // other reducers here
  },
  extraReducers: (builder) => {
    builder.addCase(getFinancialData.pending, (state) => {
      // handle pending state
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getFinancialData.fulfilled, (state, action) => {
      // handle fulfilled state
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getFinancialData.rejected, (state, action) => {
      // handle rejected state
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

// Export the financeDataItem actions and reducer
export const {
  /* Add any extra actions here */
} = financialDataSlice.actions;
export default financialDataSlice.reducer;
