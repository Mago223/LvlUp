// src/components/NavigationMenu.jsx
import React from 'react';
import '../styles/NavigationMenu.css';

function NavigationMenu() {
  return (
    <div className="navigation-menu">
      <ul>
        <li>Personal</li>
        <li>Workout Plans</li>
        <li>Progress</li>
        <li>Help</li>
        <li>Settings</li>
        <li>Notification</li>
      </ul>
      <div className="logout">Log Out</div>
      <div className="delete-account">Delete Account</div>
    </div>
  );
}

export default NavigationMenu;

