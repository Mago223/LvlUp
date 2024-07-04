import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Registration } from "./features/auth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
