import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import AppFooter from "./Footer";
const MainLayout = () => {
  return (
    <div>
      <ScrollRestoration />
      <div>
        <Navbar />
        <Outlet />
        <AppFooter />
      </div>
    </div>
  );
};

export default MainLayout;
