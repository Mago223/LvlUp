export default function UserCard({ userData }) {
  const {
    username,
    fullName,
    leaderboardNum,
    level,
    progressBar,
    profilePicture,
    bio,
  } = userData;

  return (
    <div className="relative flex flex-col mt-6 p-5 bg-dark-grey shadow-md bg-clip-border rounded-xl w-72">
      {/* leaderboard number */}
      <div>
        <p>#{leaderboardNum}</p>
      </div>

      {/* profile pic & username */}
      <div>
        <img
          class="w-10 h-10 rounded-full"
          src={profilePicture}
          alt="Rounded avatar"
        />
        <p>@{username}</p>
      </div>

      {/* full name */}
      <div>
        <p>{fullName}</p>
      </div>

      {/* level and progress bar*/}
      <div>
        <p>Lvl. {level}</p>
        <div className="w-full h-3  bg-input-grey rounded-full"></div>
      </div>
    </div>
  );
}
