// src/components/TodaysGoals.jsx
import React from 'react';
import '../styles/Goals.css';

function Goals() {
  return (
    <div className="todays-goals">
      <h2>Today's Goals</h2>
      <div className="goals-images">
        <img src="goal1.jpg" alt="Goal 1" />
        <img src="goal2.jpg" alt="Goal 2" />
        <img src="goal3.jpg" alt="Goal 3" />
        <img src="goal4.jpg" alt="Goal 4" />
        <img src="goal5.jpg" alt="Goal 5" />
        <img src="goal6.jpg" alt="Goal 6" />
      </div>
    </div>
  );
}

export default Goals;

