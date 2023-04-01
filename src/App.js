import { Route, Routes } from "react-router-dom"
import EmployeeAdd from "./pages/EmployeeAdd";
import EmployeeList from "./pages/EmployeeList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/add-employee" element={<EmployeeAdd />} />
      </Routes>
    </>
  );
}

export default App;
