import HomeNavbar from "@components/HomeNavbar";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HomeNavbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
