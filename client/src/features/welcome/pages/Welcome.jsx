import "../styles/welcome.css";
import WelcomeNav from "../components/WelcomeNav";
import welcomePic from "../assets/welcome-page-pic.jpg";

function Welcome() {
    return (
        <div className="welcome">
            {/**Navbar */}
            <WelcomeNav />
            <div id="back" className="min-h-screen bg-black">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col" id="textCont">
                        <div className="flex flex-row justify-start">
                            <h1 className="font-bold" id="headline">Take Your Fitness To The Next Level!</h1>  
                        </div>
                
                        <div className="flex flex-row justify-start ">
                            <p id="subtitle" className="font-bold">LvlUp offers customized meal plans,<br></br> effective workouts, and more ways to <br></br>level up your fitness!</p>
                        </div>
               
                        <div>
                            <button
                                className=" font-bold rounded-md m-10 px-20 py-2 leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                id="signUp"
                            >
                                <a href="/register"> Sign Up Now! </a>{/* Sign up button */}
                            </button>
                        </div>
                    </div>
                 
                    <img id="welcomePic"  src={welcomePic}  />
                    
                </div>
            </div>  
        </div>
    );
}

export default Welcome;

