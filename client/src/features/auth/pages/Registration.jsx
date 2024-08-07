import "../styles/Registration.css";
import { useState } from "react";
import signUpPic from "../assets/dumbbells.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../utils/AuthContext";

import authService from "../services/authService";
import ErrorPopup from "../components/ErrorPopUp";

export default function Registration() {
	const [user, setUser] = useState({
		fullName: "",
		username: "",
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const { login } = useAuth();

	const [confirmedPassword, setConfirmedPassword] = useState("");
	const [error, setError] = useState(null);
    const [openErrorPopup, setOpenErrorPopup] = useState(false);

	const handleUserInput = (e) => {
		const { name, value } = e.target;
		setUser((prev) => ({ ...prev, [name]: value }));
	};

	const handleConfirmPassowrd = () => {
		if (confirmedPassword === user.password) {
			return true;
		}
		return false;
	};

	const handleSignup = async (e) => {
		e.preventDefault();
		if (handleConfirmPassowrd()) {
			try {
				const response = await authService.signup(user);
				console.log(response);
				// After successful signup, log the user in
				await login({ email: user.email, password: user.password });
				navigate("/home", { replace: true });
			} catch (error) {
				console.error("Signup error:", error.message);
				setError(error.message || "An error occurred while signing up. Please try again.");
				setOpenErrorPopup(true);
			}

		} else {
			console.error("Signup failed");
			setError("Passwords do not match");
			setOpenErrorPopup(true);
		}
	};

	return (
		<div id="signupBody" className="flex flex-row justify-center items-center min-h-screen">
			<div
				id="formCard"
				className="bg-[#1F2025] shadow-2xl p-8 max-w-md w-full rounded-xl lg:rounded-r-none"
			>
				<h1 id="title" className="text-4xl font-bold text-center  mb-2">
					LvlUp
				</h1>
				<p id="subheading" className="text-xl font-bold text-center mb-6">
					Unlock Your Next Level
				</p>
				<form id="registrationForm" noValidate="" action="#" onSubmit={handleSignup}>
					<div className="mb-4">
						<label
							htmlFor="fullName"
							className="block text-gray-700 font-semibold mb-2"
						>
							Full Name
						</label>
						<input
							type="text"
							id="fullName"
							name="fullName"
							className="w-full px-4 py-2.5 border-0 rounded-lg shadow-sm"
							placeholder="Enter your full name"
							required
							value={user.fullName}
							onChange={handleUserInput}
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="username"
							className="block text-gray-700 font-semibold mb-2"
						>
							Username
						</label>
						<input
							type="text"
							id="username"
							name="username"
							className="w-full px-4 py-2.5 border-0 rounded-lg shadow-sm"
							placeholder="Enter your username"
							required
							value={user.username}
							onChange={handleUserInput}
						/>
					</div>

					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full px-4 py-2.5 border-0 rounded-lg shadow-sm"
							placeholder="Enter your email"
							required
							value={user.email}
							onChange={handleUserInput}
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-gray-700 font-semibold mb-2"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="w-full px-4 py-2.5 border-0 rounded-lg shadow-sm"
							placeholder="Enter your password"
							required
							value={user.password}
							onChange={handleUserInput}
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="confirm-password"
							className="block text-gray-700 font-semibold mb-2"
						>
							Confirm Password
						</label>
						<input
							type="password"
							id="confirm-password"
							name="confirm-password"
							className="w-full px-4 py-2.5 border-0 rounded-lg shadow-sm"
							placeholder="Confirm your password"
							required
							value={confirmedPassword}
							onChange={(e) => setConfirmedPassword(e.target.value)}
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold "
					>
						Register
					</button>
				</form>
				<p className="text-center mt-4 text-gray-700">
					Already have an account?{" "}
					<a href="/login" className="font-semibold">
						Sign In
					</a>
				</p>
			</div>

			<div>
				<img
					id="signupPic"
					className="rounded-tr-xl rounded-br-xl shadow-2xl max-w-md w-full hidden lg:block"
					src={signUpPic}
				></img>
			</div>
			{error && <ErrorPopup open={openErrorPopup} setOpen={setOpenErrorPopup} message={error} />}
		</div>
	);
}
