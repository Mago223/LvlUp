import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Registration, Welcome } from "./features/auth/index";
import MainNavbar from "./features/home/components/MainNavbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Welcome />} /> {/**Home page */}
          <Route path="/navbar" element={<MainNavbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
