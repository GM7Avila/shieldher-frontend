import { Route, Routes } from "react-router-dom";
import "./assets/style/index.css";
import HomeLayout from "./pages/shared/HomeLayout";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
