import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const DefaultLayout = () => {
  return (
    <div className="min-h-screen bg-grisClair flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 md:px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
