import { configureStore } from "@reduxjs/toolkit";
import financialDataReducer from "../modules/financialData.Slice.js";
import financialDataItemReducer from "../modules/financialDataItem.Slice.js";

const store = configureStore({
  reducer: {
    financeData: financialDataReducer,
    financeDataItem: financialDataItemReducer,
  },
  // Add any middleware or enhancers here
});

export default store;
