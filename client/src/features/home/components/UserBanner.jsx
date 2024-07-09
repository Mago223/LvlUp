import React from 'react'
import '../styles/UserBanner.css'
import profilePic from '../assets/profile-pic.jpg'

const UserBanner = () => {
  return (
    <div className='container'>
        <div className='user-banner'>
            <div className='user-info'>
                <img src={profilePic} alt='user image' />
                <h1>JohnDoe123</h1>
                {/* Add {username} here */}
            </div>
        </div>
    </div>
  )
}

export default UserBanner;