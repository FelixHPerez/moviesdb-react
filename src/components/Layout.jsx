import { MoviesProvider } from "./MoviesContext";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <MoviesProvider>
        <Header />
        <main className="bg-[#121212] flex-auto flex items-center justify-center">
          <Outlet />
        </main>
        <Footer />
      </MoviesProvider>
    </>
  );
};

export default Layout;
