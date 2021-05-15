import logo from "./logo.svg";
import "./App.css";
import MainApp from "./Components/MainApp";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="w-full h-screen bg-gray-700 text-white overflow-auto">
      <Navbar />
      <MainApp />
    </div>
  );
}

export default App;
