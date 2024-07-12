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
    <div className="relative flex flex-col items-center mt-10 ml-6 p-5 bg-dark-grey shadow-md bg-clip-border rounded-xl w-72">
      {/* leaderboard number */}
      <div classsName="text-center">
        <p>#{leaderboardNum}</p>
      </div>

      {/* profile pic & username */}
      <div className="flex flex-col items-center mt-5">
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

      {/* level and progres bar section */}
      <div className="w-full mb-4">
        {/* level */}
        <div className="flex justify-between mb-1">
          <span>Lvl. {level}</span>
        </div>
        {/* progress bar */}
        <div className="w-full bg-input-grey rounded-full h-2.5">
          <div
            className="h-2.5 rounded-full"
            style={{
              width: `${progressBar}%`,
              background:
                "linear-gradient(90deg, #d00000 0%, #e85d04 50%, #ffba08 100%)",
            }}
          ></div>
        </div>
      </div>

      {/* Bio bubble */}
      <div className="h-auto w-full bg-input-grey flex items-center justify-center">
        <div className="p-3 text-center">
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
}
