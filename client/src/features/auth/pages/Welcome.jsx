import "../styles/Welcome.css";
import WelcomeNav from "../components/WelcomeNav";

function Welcome() {
    return (
        <div className="welcome">
            {/**Navbar */}
            <WelcomeNav />

            <body className="flex min-h-screen ">
                <h1 className="font-bold text-7xl" id="headline">Take Your Fitness To The <br></br> Next Level!</h1>
             
                <p id="subtitle" className="font-bold">LvlUp offers customized meal plans,<br></br> effective workouts, and more ways to <br></br>level up your fitness!</p>
                
            </body>
        
        </div>
    );
}

export default Welcome;