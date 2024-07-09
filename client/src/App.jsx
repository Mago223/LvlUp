import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Registration } from "./features/auth/index";
import { Welcome } from "./features/welcome";
import { Home } from "./features/home";
import PrivateRoutes from "./components/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";
import TestRoute from "./features/testRoute/TestRoute";

function App() {
	return (
		<div>
			<Router>
				<AuthProvider>
					<Routes>
						<Route path="/register" element={<Registration />} />
						<Route path="/login" element={<Login />} />
						<Route path="/" element={<Welcome />} /> {/**welcome page */}
						<Route element={<PrivateRoutes />}>
							<Route path="/home" element={<Home />} />
							<Route path="/test" element={<TestRoute />} />
						</Route>
					</Routes>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
