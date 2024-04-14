import { configureStore } from "@reduxjs/toolkit";
import { getFinancialData } from "./financialData.Slice";
import financialDataReducer from "./financialData.Slice.js";

describe("financialData slice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { financialData: financialDataReducer },
    });
  });

  it("dispatches getFinancialData action and updates state", async () => {
    // Mock the fetch API
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, name: "Investor 1" }]),
      })
    );

    await store.dispatch(getFinancialData());

    const state = store.getState();

    expect(state.financialData).toEqual({
      isLoading: false,
      error: null,
      data: [{ id: 1, name: "Investor 1" }],
    });
  });
});
