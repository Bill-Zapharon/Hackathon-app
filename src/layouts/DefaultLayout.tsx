import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Navbar/Header";
import Footer from "../components/Footer/Footer";
import { TontineProvider } from "../contexts/TontineContext"; // Import du contexte

const DefaultLayout = () => {
  return (
    <TontineProvider>
      <div className="min-h-screen bg-grisClair flex flex-col">
        <Header />
        <main className="container mx-auto px-4 md:px-8 py-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </TontineProvider>
  );
};

export default DefaultLayout;
