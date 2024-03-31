import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Nav />
      </div>
      {/* Packet the pages */}
      <Outlet />

      <div className="mt-[6%]">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
