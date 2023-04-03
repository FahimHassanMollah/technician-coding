import { Route, Routes } from "react-router-dom"
import PostsList from "./pages/PostsList";
import PostAdd from "./pages/PostAdd";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/add-post" element={<PostAdd />} />
      </Routes>
    </>
  );
}

export default App;
