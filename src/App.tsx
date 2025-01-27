import { Route, Routes } from "react-router-dom";
import "./assets/style/index.css";
import HomeLayout from "./pages/shared/home/HomeLayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
("./pages/login/Login");
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Home />} />
          <Route path="/contato" element={<Home />} />
          <Route path="/denunciar" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
