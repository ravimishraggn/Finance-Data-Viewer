import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>FirmId</th>
              <th>FirmName</th>
              <th>Type</th>
              <th>DateAdded</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ABC Company</td>
              <td>Software</td>
              <td>2021-01-01</td>
              <td>123 Main St</td>
            </tr>
            <tr>
              <td>2</td>
              <td>XYZ Corporation</td>
              <td>Hardware</td>
              <td>2021-02-15</td>
              <td>456 Elm St</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
