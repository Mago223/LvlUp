import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Registration } from "./features/auth/index";
import { Welcome } from "./features/welcome";
import { Home } from "./features/home";
import PrivateRoutes from "./components/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";
import { NotFound } from "./features/notFound";

function App() {
	return (
		<div>
			<AuthProvider>
				<Router>
					<Routes>
						{/* Public routes */}
						<Route path="/register" element={<Registration />} />
						<Route path="/login" element={<Login />} />
						<Route path="/" element={<Welcome />} /> {/**welcome page */}
						{/* Protected routes */}
						<Route element={<PrivateRoutes />}>
							<Route path="/home" element={<Home />} />
						</Route>
						{/* Catch-all route for undefined paths */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
