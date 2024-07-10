import "../styles/welcome.css";
import WelcomeNav from "../components/WelcomeNav";
import welcomePic from "../assets/welcome-page-pic.jpg";

function Welcome() {
    return (
        <div className="welcome">
            {/**Navbar */}
            <WelcomeNav />
            <div id="back" className="min-h-screen bg-black w-full">
                <div className=" max-w-[1250px] mx-auto grid md:grid-cols-2">
                    <div className="flex flex-col lg:pl-[130px] pl-0" id="textCont">
                        {/* Text section */}

                            <h1 className="font-bold text-[50px] sm:text-[57px] pt-[15px] sm:pt-[90px] " id="headline">Take Your Fitness To The Next Level!</h1> 
                            <p id="subtitle" className="font-bold text-[22px] sm:text-[25px] text-[#FAA307] pt-[25px]">LvlUp offers customized meal plans,<br></br> effective workouts and many more ways <br></br>to level up your fitness!</p> 
                        
                        {/* Sign up button */}

                            <button
                                className="font-bold rounded-md my-6 px-[80px] mx-auto sm:mx-auto py-2 leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                id="signUp"
                            >
                                <a href="/register"> Sign Up Now! </a>
                            </button>
                    </div>
                   

                    <img id="welcomePic"  src={welcomePic} className="hidden lg:block mx-auto md:mx-[80px]"  />
                            
                    
                </div>
            </div>  
        </div>
    );
}

export default Welcome;

