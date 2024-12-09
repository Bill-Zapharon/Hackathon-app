import { Outlet } from "react-router-dom";
import Header from "../components/Navbar/Header";
import Footer from "../components/Footer/Footer";
const DefaultLayout = () => {
  return (
    <div className="min-h-screen bg-grisClair flex flex-col">
      <Header></Header>
      <main className="container mx-auto px-4 md:px-8 py-6">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default DefaultLayout;
