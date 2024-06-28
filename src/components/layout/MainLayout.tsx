import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
const MainLayout = () => {
  return (
    <div>
      <ScrollRestoration />
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
