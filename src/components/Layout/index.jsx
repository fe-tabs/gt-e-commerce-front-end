import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = ({ children }) => {
  return(
    <main>
      <Header/>

      <Outlet>
        {children}
      </Outlet>

      <Footer/>
    </main>
  );
}