import React from "react";
import "./Noticeboard.css";
import { AiOutlineClose } from "react-icons/ai";

const NoticeBoard = () => {
  return (
    <div className="nBoard">
      <div className="close">
        <p className="xBtn">
          <AiOutlineClose />
        </p>

        <p className="notice">Notice Board</p>
      </div>
    </div>
  );
};

export default NoticeBoard;
