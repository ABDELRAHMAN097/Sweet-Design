import AppRoutes from "../AppRoutes";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <NavBar />
      <div className="px-4 md:px-20 overflow-hidden">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
