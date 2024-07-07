import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Registration } from "./features/auth/index";
import { Welcome } from "./features/welcome";
import { Home } from "./features/home";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/register" element={<Registration />} />
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Welcome />} /> {/**welcome page */}
					<Route path="/home" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
