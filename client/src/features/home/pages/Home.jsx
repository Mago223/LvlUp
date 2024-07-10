import "../styles/Home.css";
import MainNavbar from "../components/MainNavbar";
import { useEffect, useState } from "react";
import userService from "../../../services/userService";

export default function Home() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const getUser = async () => {
			const response = await userService.me();
			setUser(response.data.user);
		};
		getUser();
	}, []);

	return (
		<div id="homePage">
			<header>
				<MainNavbar />
			</header>
			<div>
				{/* posting user information to make sure the correct user is chosen (to be deletd, just confirmation the correct user is here) */}
				{user && (
					<>
						<div className="text-white">
							<h1>User Information</h1>
							<p>ID: {user.id}</p>
							<p>USERNAME: {user.username}</p>
							<p>EMAIL: {user.email}</p>
						</div>
					</>
				)}
			</div>
			{/* no body tags in jsx return statements -.- LOL */}
			{/* <body></body> */}
		</div>
	);
}
