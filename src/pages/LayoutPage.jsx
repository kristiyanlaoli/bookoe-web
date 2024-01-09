import { Outlet } from "react-router-dom";
import Header from "/src/Header.jsx";
import Footer from "/src/Footer.jsx";
import Subscribe from "/src/Subcribe.jsx";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Subscribe />
      <Footer />
    </>
  );
};

export default AppLayout;
