import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>Gender: {user.gender}</p>
      <p>Height: {user.height}</p>

    </div>
  );
};

export default UserCard;