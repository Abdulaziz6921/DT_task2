import React from "react";
import "./Navbar.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImHome3 } from "react-icons/im";
import { FaTools } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import User from "../Images/user.png";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img
          src="https://deepthought.education/assets/images/logo/logo.svg"
          alt=""
        />
      </div>

      <div className="navItems">
        <div className="item">
          <ImHome3 />
        </div>
        <div className="item">
          <FaTools />
        </div>
        <div className="item">
          <IoMdNotifications />
        </div>
        <div className="profileImg">
          <img src={User} alt="User" />
        </div>
        <BsThreeDotsVertical className="dots" />
      </div>
    </div>
  );
};

export default Navbar;
