import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Registration, Welcome } from "./features/auth/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Welcome />} /> {/**Home page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
