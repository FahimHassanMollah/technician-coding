import { Route, Routes } from "react-router-dom"
import EmployeeAdd from "./pages/PostAdd";
import PostsList from "./pages/PostsList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/add-employee" element={<EmployeeAdd />} />
      </Routes>
    </>
  );
}

export default App;
