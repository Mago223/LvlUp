import "../styles/welcome.css";
import WelcomeNav from "../components/WelcomeNav";
import welcomePic from "../assets/welcome-page-pic.jpg";
import { BoltIcon} from '@heroicons/react/20/solid';

function Welcome() {
    return (
        <div className="welcome">
            {/**Navbar */}
            <WelcomeNav />
            <div id="back" className="min-h-screen bg-black w-full">
                <div className=" max-w-[1250px] mx-auto grid lg:grid-cols-2">
                    <div className="flex flex-col lg:pl-[130px] pl-0" id="textCont">
                        {/* Text section */}

                            <h1 className="font-bold text-[48px] sm:text-[52px] pt-[15px] sm:pt-[135px] " id="headline">Take Your Fitness To The Next Level!</h1> 
                            <p id="subtitle" className="font-bold text-[19px] sm:text-[23px] pt-[25px] text-[#FAA307]">Transform Your Fitness Journey: Achieve Your Goals, Track Your Progress, and Unlock Your Full Potential with LvlUp</p> 

                        {/* Icons & Features */}   
                        <ul role="list" className="flex flex-row mt-5 justify-between pt-[15px] pb-[15px]">
                            <li className="flex gap-x-1">
                                <BoltIcon className=" flex-none h-5 w-5 text-[#FFBA08]" aria-hidden="true" />
                                <p className="text-[10px] sm:text-[13px] text-[#FFBA08]">Personalized Plans</p>
                            </li>
                            <li className="flex gap-x-1">
                                <BoltIcon className=" flex-none h-5 w-5 text-[#FFBA08]" aria-hidden="true" />
                                <p className="text-[10px] sm:text-[13px] text-[#FFBA08]">Community Support</p>
                            </li>
                            <li className="flex gap-x-1">
                                <BoltIcon className=" flex-none h-5 w-5 text-[#FFBA08]" aria-hidden="true" />
                                <p className="text-[10px] sm:text-[13px] text-[#FFBA08]">Real-Time Tracking</p>
                            </li>
                        </ul>
    
                        {/* Sign up button */}
                            <button
                                className="font-bold rounded-md my-6 px-[80px] mx-auto sm:mx-auto py-2 leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                id="signUp"
                            >
                                <a href="/register"> Sign Up Now! </a>
                            </button>
                    </div>
                   
                        {/* Picture */}
                        <img id="welcomePic"  src={welcomePic} className="hidden lg:block mx-auto md:mx-[80px]"  />
                </div>
            </div>  
        </div>
    );
}

export default Welcome;

