import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFinanceDataItem } from "../modules/financialDataItem.Slice";

const FinanceDataItem = () => {
  const state = useLocation();
  const dispatch = useDispatch();
  const financialDataItem = useSelector(
    (state) => state.financeDataItem.dataItem
  );
  const handleOptionChange = (event) => {
    const queryString = `${event.target.value}/${state.state.firmId}`;
    dispatch(fetchFinanceDataItem(queryString));
  };

  const renderTableRows = () => {
    return financialDataItem?.map((row) => (
      <tr key={row.id}>
        <td style={{ border: "1px solid black" }}>{row.id}</td>
        <td style={{ border: "1px solid black" }}>{row.asset_class}</td>
        <td style={{ border: "1px solid black" }}>{row.firm_id}</td>
        <td style={{ border: "1px solid black" }}>{row.amount}</td>
        <td style={{ border: "1px solid black" }}>{row.currency}</td>
      </tr>
    ));
  };

  // ...

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", // Align to top
        marginTop: "10px",
      }}
    >
      <div style={{ position: "absolute", top: "10px", left: "10px" }}>
        <button onClick={() => (window.location.href = "/")}>Home</button>
      </div>
      <label htmlFor="assetClass">Asset Class : </label>
      <select
        id="assetClass"
        onChange={handleOptionChange}
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "10px",
          backgroundColor: "lightblue",
          marginLeft: "10px",
        }}
      >
        <option value="" style={{ backgroundColor: "lightgrey" }}>
          Select an asset class
        </option>
        <option value="pe" style={{ backgroundColor: "lightgrey" }}>
          Private Equity
        </option>
        <option value="pd" style={{ backgroundColor: "lightgrey" }}>
          Private Debt
        </option>
        <option value="re" style={{ backgroundColor: "lightgrey" }}>
          Real Estate
        </option>
        <option value="inf" style={{ backgroundColor: "lightgrey" }}>
          Infrastructure
        </option>
        <option value="nr" style={{ backgroundColor: "lightgrey" }}>
          Natural Resources
        </option>
        <option value="hf" style={{ backgroundColor: "lightgrey" }}>
          Hedge Funds
        </option>
      </select>

      {state.state && state.state.firmId && (
        <div style={{ marginTop: "20px" }}>
          <table
            style={{
              width: "100%",
              maxWidth: "500px",
              minWidth: "500px",
              borderCollapse: "collapse",
              border: "1px solid black",
              margin: "0 auto",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    backgroundColor: "lightblue",
                    border: "1px solid black",
                  }}
                >
                  ID
                </th>
                <th
                  style={{
                    backgroundColor: "lightblue",
                    border: "1px solid black",
                  }}
                >
                  Asset Class
                </th>
                <th
                  style={{
                    backgroundColor: "lightblue",
                    border: "1px solid black",
                  }}
                >
                  Firm ID
                </th>
                <th
                  style={{
                    backgroundColor: "lightblue",
                    border: "1px solid black",
                  }}
                >
                  Amount
                </th>
                <th
                  style={{
                    backgroundColor: "lightblue",
                    border: "1px solid black",
                  }}
                >
                  Currency
                </th>
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FinanceDataItem;
