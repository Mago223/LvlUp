import { useState, useEffect } from "react";

export default function UserCard({ userData }) {
  const [bioFontSize, setBioFontSize] = useState("text-sm");

  const calculateFontSize = (text) => {
    if (text.length < 50) return "text-lg";
    if (text.length < 100) return "text-base";
    if (text.length < 150) return "text-sm";
    return "text-xs";
  };

  const {
    username,
    fullName,
    leaderboardNum,
    level,
    progressBar,
    profilePicture,
    bio,
  } = userData;

  useEffect(() => {
    setBioFontSize(calculateFontSize(bio));
  }, [bio]);

  return (
    <div className="relative flex flex-col items-center mt-10 ml-6 p-5 bg-dark-grey shadow-md bg-clip-border rounded-xl w-56">
      {/* leaderboard number */}
      <div classsName="text-center">
        <p className="text-white text-xl ">#{leaderboardNum}</p>
      </div>

      {/* profile pic & username */}
      <div className="flex flex-col items-center mt-5">
        <div className="w-20 h-20 overflow-hidden rounded-full">
          <img
            className="w-full h-full object-cover"
            src={profilePicture}
            alt={`${username}'s avatar`}
          />
        </div>
        <p className="text-xs mb-3 text-text-grey">@{username}</p>
      </div>

      {/* full name */}
      <div className="text-center justify-center mb-3">
        <p className="text-main-theme-orange font-semibold italic text-2xl">
          {fullName}
        </p>
      </div>

      {/* level and progres bar section */}
      <div className="w-full mb-4">
        {/* level */}
        <div className="flex justify-between mb-1">
          <span className="text-white font-semibold italic text-lg">
            Lvl. {level}
          </span>
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
      <div className="h-auto w-full bg-input-grey flex items-center justify-center rounded-lg">
        <div
          className={`p-2 text-center text-main-theme-yellow font-semibold italic ${bioFontSize}`}
        >
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
}
