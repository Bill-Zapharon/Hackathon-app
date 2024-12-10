import Header from "../components/Navbar/Header";
import Footer from "../components/Footer/Footer";
import { UserProvider } from "../contexts/UserContext";

const Home = () => {
  return (
    <div>
      <UserProvider>
        <Header></Header>
        <Footer></Footer>
      </UserProvider>
    </div>
  );
};

export default Home;
