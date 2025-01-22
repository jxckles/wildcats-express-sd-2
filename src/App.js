import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { MainPage } from "./pages/main-page/main-page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/main-page" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;