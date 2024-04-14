import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FinanceDataGrid from "./components/financeData";
import FinanceDataItem from "./components/financeDataItem";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<FinanceDataGrid></FinanceDataGrid>} />
          <Route
            path="/financeDataItem"
            element={<FinanceDataItem></FinanceDataItem>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
