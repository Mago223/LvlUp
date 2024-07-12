import "../styles/welcome.css";
import WelcomeNav from "../components/WelcomeNav";
import welcomePic from "../assets/welcome-page-pic.jpg";
import { BoltIcon } from "@heroicons/react/20/solid";

function Welcome() {
	return (
		<div className="welcome">
			<WelcomeNav />
			<div id="back" className="min-h-screen bg-black w-full">
				<div className="max-w-[1250px] mx-auto lg:grid lg:grid-cols-2 lg:gap-x-8">
					<div className="flex flex-col px-4 lg:pl-[130px] lg:pr-0" id="textCont">
						<h1
							className="font-bold text-[36px] sm:text-[48px] lg:text-[52px] pt-[20px] lg:pt-[135px]"
							id="headline"
						>
							Take Your Fitness To The Next Level!
						</h1>
						<img
							id="welcomePic"
							src={welcomePic}
							className="w-[70%] mx-auto mt-5 object-cover lg:hidden"
							alt="Welcome"
						/>
						<p
							id="subtitle"
							className="font-bold text-[16px] sm:text-[19px] lg:text-[23px] pt-[15px] sm:pt-[25px] text-[#FAA307]"
						>
							Transform Your Fitness Journey: Achieve Your Goals, Track Your Progress,
							and Unlock Your Full Potential with LvlUp
						</p>

						<ul
							role="list"
							className="flex flex-wrap justify-center lg:justify-start gap-4 mt-5 pt-[15px] pb-[15px]"
						>
							{["Personalized Plans", "Community Support", "Real-Time Tracking"].map(
								(feature, index) => (
									<li key={index} className="flex items-center gap-x-1">
										<BoltIcon
											className="flex-none h-5 w-5 text-[#FFBA08]"
											aria-hidden="true"
										/>
										<p className="text-sm text-[#FFBA08]">{feature}</p>
									</li>
								)
							)}
						</ul>

						<button
							className="font-bold rounded-md mt-6 mb-8 px-[40px] sm:px-[80px] w-full sm:w-auto mx-auto py-2 leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
							id="signUp"
						>
							<a href="/register"> Sign Up Now! </a>
						</button>
					</div>

					<div className="hidden lg:flex lg:items-center">
						<img
							id="welcomePic"
							src={welcomePic}
							className="w-full h-auto object-cover"
							alt="Welcome"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
