import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="h-16">
        <Nav />
      </div>
      {/* Packet the pages */}
      <div style={{ flex: '1' }}>
        <Outlet />
      </div>

      <div className="mt-[6%]">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
