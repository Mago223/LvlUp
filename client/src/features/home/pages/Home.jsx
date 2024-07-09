import "../styles/Home.css";
import MainNavbar from "../components/MainNavbar";
import ProfileOverview from "../components/ProfileOverview";
import Goals from "../components/Goals";
import NavigationMenu from "../components/NavigationMenu";
import UserBanner from "../components/UserBanner";

export default function Home() {
  return (
    <div id="homePage">
      <header>
        <MainNavbar />
      </header>
      <main>
        <UserBanner />
        <ProfileOverview />
        <NavigationMenu />
        <Goals />
      </main>
    </div>
  );
}
