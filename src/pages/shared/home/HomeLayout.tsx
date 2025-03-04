import HomeNavbar from "@components/home/HomeNavbar";
import { Outlet } from "react-router";
import Footer from "../../../components/home/Footer";

const HomeLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <HomeNavbar />
      <div style={{ flex: 1 }}>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
