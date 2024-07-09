import React from 'react';
import '../styles/ProfileOverview.css';

function ProfileOverview() {
  return (
    <div className="profile-overview">
      <div className="stats">
        <div className="calories">
          <h2>1500.0 cals</h2>
          <p>Time: 5:25:05</p>
          <div className="chart">
          </div>
        </div>
        <div className="metrics">
          <div>Weight: 142.5 lbs</div>
          <div>Height: 5.6 ft</div>
          <div>Heart Rate: 70 bpm</div>
          <div>Streak: 🔥</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileOverview;