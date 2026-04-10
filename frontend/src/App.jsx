import "./styles/app.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Outlet />
      {/*  Aqui onde vai aparecer as páginas que foram colocadas como rota  */}
    </div>
  );
}

export default App;
