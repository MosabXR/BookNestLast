import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-primary-black text-primary-white">
      <Navbar />
      <main className="flex-grow z-0">
        <Outlet /> {/* Renders the current page */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
