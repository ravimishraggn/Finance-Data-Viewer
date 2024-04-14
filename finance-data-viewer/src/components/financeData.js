import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFinancialData } from "../modules/financialData.Slice";

import { useNavigate } from "react-router-dom";

function FinanceDataGrid() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getFinancialData());
  }, [dispatch]);

  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row) => {
    if (selectedRow === row) {
      setSelectedRow(null);
    } else {
      setSelectedRow(row);
    }
  };
  const navigate = useNavigate();
  const handleRowDoubleClick = (row) => {
    navigate("/financeDataItem", { state: { firmId: row.firm_id } });
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".table-container")) {
        setSelectedRow(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="App">
      <div className="table-container">
        <table
          className="table"
          style={{ border: "1px solid black", width: "100%", height: "100%" }}
        >
          <thead style={{ backgroundColor: "lightblue" }}>
            <tr>
              <th style={{ border: "1px solid black" }}>FirmId</th>
              <th style={{ border: "1px solid black" }}>FirmName</th>
              <th style={{ border: "1px solid black" }}>Type</th>
              <th style={{ border: "1px solid black" }}>DateAdded</th>
              <th style={{ border: "1px solid black" }}>Address</th>
            </tr>
          </thead>
          <tbody>
            {state.financeData?.data &&
              state.financeData?.data?.map((row) => (
                <tr
                  key={row.firm_id}
                  style={{
                    border: "1px solid black",
                    backgroundColor:
                      selectedRow === row ? "yellow" : "lightgray",
                  }}
                  onClick={() => handleRowClick(row)}
                  onDoubleClick={() => handleRowDoubleClick(row)}
                >
                  <td
                    style={{
                      border: "1px solid black",
                      backgroundColor:
                        selectedRow === row ? "yellow" : "lightgray",
                    }}
                  >
                    {row.firm_id}
                  </td>
                  <td style={{ border: "1px solid black" }}>{row.firm_name}</td>
                  <td
                    style={{
                      border: "1px solid black",
                      backgroundColor:
                        selectedRow === row ? "yellow" : "lightgray",
                    }}
                  >
                    {row.firm_type}
                  </td>
                  <td style={{ border: "1px solid black" }}>
                    {row.date_added}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      backgroundColor:
                        selectedRow === row ? "yellow" : "lightgray",
                    }}
                  >
                    {row.address}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FinanceDataGrid;
