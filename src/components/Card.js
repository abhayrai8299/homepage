import React from 'react';
import '../index.css'
const Card = ({ imageUrl, name }) => {
  return (
    <div className="small-card">
      <img src={imageUrl} alt="Profile" className="profile-image" />
      <div className="profile-details">
        <h3 className="name">{name}</h3>
        <button className='custom_button'>See Profile</button>
      </div>
    </div>
  );
};

export default Card;