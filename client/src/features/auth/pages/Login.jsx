import "../styles/Login.css";
import loginPic from "../assets/login-pic.png";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../utils/AuthContext";
import ErrorPopup from "../components/ErrorPopUp";

function Login() {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const location = useLocation();
	const { login } = useAuth();
	const [error, setError] = useState(null);
    const [openErrorPopup, setOpenErrorPopup] = useState(false);

	const handleUserInput = (e) => {
		const { name, value } = e.target;
		setUser((prev) => ({ ...prev, [name]: value }));
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		try{
			const response = await login(user);
			console.log(response);
		}catch (error) {
			console.error("Login error:", error.message);
			setError(error.message || "An error occurred while logging up. Please try again.");
			setOpenErrorPopup(true);
		}
		
		const from = location.state?.from?.pathname || "/home";
		navigate(from, { replace: true });
	};

	return (
		<div className="login">
			<div id="background" className="flex justify-center items-center min-h-screen">
				<div
					className="bg-[#1F2025] text-[#181028] p-8 space-y-6 shadow-2xl rounded-xl lg:rounded-r-none max-w-full"
					id="loginBody"
				>
					<h1 id="logTitle"> LvlUp </h1> {/* logo */}
					<p>Welcome back! Please enter your login credentials.</p> {/* Instructions */}
					<form className="space-y-6" action="#" method="POST" onSubmit={handleLogin}>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 "
								id="emailLabel"
							>
								{" "}
								{/* Email */}
								Email
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									value={user.email}
									onChange={handleUserInput}
									required
									className="block w-full rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6"
								id="passwordLabel"
							>
								{" "}
								{/* Password */}
								Password
							</label>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									value={user.password}
									onChange={handleUserInput}
									required
									className="block w-full rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="text-sm">
							<a href="#" id="forgotLabel">
								{" "}
								{/* Forgot Password Link */}
								Forgot password?
							</a>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
								id="button"
							>
								Sign in {/* Sign in button */}
							</button>
						</div>
					</form>
					<p className="mt-10 text-center text-sm text-white-500">
						Don't have an account?{" "}
						<a href="/register" id="signUpLink" className="font-semibold leading-6 ">
							{" "}
							{/*link to register page*/}
							Sign up now
						</a>
					</p>
				</div>

				<div>
					<img
						id="pic"
						className="rounded-xl rounded-l-none shadow-2xl max-w-full hidden lg:block"
						src={loginPic}
					/>{" "}
					{/**Picture */}
				</div>
			</div>
	  {error && (
				<ErrorPopup open={openErrorPopup} setOpen={setOpenErrorPopup} message={error} />
			)}
		</div>
	);
}

export default Login;
