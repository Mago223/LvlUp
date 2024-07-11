import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="min-h-screen bg-dark-grey flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
			<div className="text-white max-w-md w-full space-y-8 bg-gradient-main-theme-custom  from-main-theme-red via-main-theme-orange to-main-theme-yellow p-10 rounded-xl shadow-2xl">
				<div className="text-center">
					<h2 className="mt-6 text-6xl font-extrabold ">404</h2>
					<h3 className="mt-2 text-3xl font-bold ">Page Not Found</h3>
					<p className="mt-2 text-sm ">
						Oops! The page you're looking for doesn't exist.
					</p>
				</div>
				<div className="mt-8 space-y-6">
					<div className="flex items-center justify-center">
						<div className="animate-bounce bg-dark-grey p-2 w-16 h-16 ring-1 ring-gray-900/5 shadow-lg rounded-full flex items-center justify-center">
							<svg
								className="w-10 h-10 text-inherit"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
								></path>
							</svg>
						</div>
					</div>
					<Link
						to="/"
						className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-dark-grey hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
					>
						Go back home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
