import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app-container">
      <Header />

      <div className="main-layout">
        <Sidebar />
        <Dashboard />
      </div>

      <Footer />
    </div>
  );
}

export default App;