import "./styles/app.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
function App() {
  return (
    <div>
      <Navbar/>
      <Outlet/>{/*  Aqui onde vai aparecer as páginas que foram colocadas como rota  */}
    </div>
  );
}

export default App;
