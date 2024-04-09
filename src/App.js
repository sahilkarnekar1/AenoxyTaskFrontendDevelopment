import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Finish from "./components/Finish";
import EmailVerify from "./components/EmailVerify";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="/verify" element={<EmailVerify />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
