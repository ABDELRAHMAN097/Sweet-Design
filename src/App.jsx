import AppRoutes from "../AppRoutes";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <NavBar />
      <div className="px-4 md:px-20">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
