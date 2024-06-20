import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
