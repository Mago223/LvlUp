import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Welcome from "./pages/Welcome/Welcome";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
