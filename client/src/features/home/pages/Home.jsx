import "../styles/Home.css";
import MainNavbar from "../components/MainNavbar";
import UserCard from "../components/UserCard";
import { useEffect, useState } from "react";
import userService from "../../../services/userService";

{
  /* -- To test out user Card uncomment this!
//Fake user info
const mockUserInfo = {
  username: "johndoe",
  fullName: "John Doe",
  leaderboardNum: 16,
  level: 15, //Comes from backend API - turns xp into level by dividing by the amt of xp in each level.
  progressBar: 65.5, //remainder after the division, in this case the amt per each level is 100: 65.5/100.
  profilePicture: "https://cdn.pfps.gg/pfps/2333-goku-17.png",
  bio: "Passionate about living a healthy lifestyle and inspiring others to do the same. Love trying new workout routines, from high-intensity training to calming yoga sessions.",
};
*/
}

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
      <MainNavbar />

      <div id="homeBody" className="px-20">
        {/* body */}
        <div>
          {/* Uncomment this as well to test out userCard!
          <UserCard userData={mockUserInfo} /> */}
        </div>

        {/* user info to see if its synced properly
      <div>
        
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
      */}
      </div>
    </div>
  );
}
