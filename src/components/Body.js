import React, { useEffect } from "react";
import "../index.css";
import Card from "./Card";
import avatar1 from './images/avatar1.png';
import avatar2 from './images/avatar2.png';
import avatar3 from './images/avatar3.png';
import avatar4 from './images/avatar4.png';
import Services from "./Services";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./Actions";
import { Link } from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();
debugger;
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const users = useSelector((state) => state.user.users);
  console.log("dsafg",users)
  return (
    <div className="body_container">
      <div className="body_wrapper">
        <div className="body_heading">
          <h1>Connecting People and Technology</h1>
        </div>
        <div className="body_box_content">
          <span>Delivering IT solutions that enable you to work smarter</span>
        </div>
        <div className="body_text">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </span>
        </div>
      </div>
      <div className="user">
     <div className="user_text">
        <span>USERS</span>
        <p>Lorem ipsum dolor sit amet,consectetur adipisciting elit,...</p>
     </div>
     <div>
    
       <Link to="/user">SELL ALL</Link>
     </div>
  
     </div>
     <div className="card">
     <Card
        imageUrl={avatar1}
        name="USER 1"

      />
      <div className="card_down">
       <Card
        imageUrl={avatar2}
        name="USER 2"

      />
      </div>
       <Card
        imageUrl={avatar3}
        name="USER 3"
  
      />
      <div className="card_down">
       <Card
        imageUrl={avatar4}
        name="USER 4"

      />
      </div>
     </div>
     <Services />
     <Footer />
    </div>
  );
};

export default Body;
