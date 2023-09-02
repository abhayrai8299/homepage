import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./Actions";
import '../index.css';
const User = ({ users, loading, error, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div  className="userDetails" >
      {users.map((user) => (
        <div key={user.id} className="small-card">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Height:{user.height}</p>
          <p>Mass: {user.mass}</p>
          <p>Har Color:{user.hair_color}</p>
          <p>Skin Color:{user.skin_color}</p>
          </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.user.users,
  loading: state.user.loading,
  error: state.user.error, 
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);