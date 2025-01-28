import { Route, Routes } from "react-router-dom";
import "./assets/style/index.css";
import HomeLayout from "./pages/shared/home/HomeLayout";
import Home from "./pages/home/Home";
import Login from "./pages/sign/Login";
import SignUp from "./pages/sign/Signup";
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
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
