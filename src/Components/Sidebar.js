import React from "react";
import "./Sidebar.css";
import { useContext } from "react";
import { TasksContext } from "../context/Tasks";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useState } from "react";

const Sidebar = () => {
  const { tasks } = useContext(TasksContext);

  // const { task_title } = tasks[0].tasks[0];
  const projects = tasks;
  const [open, setOpen] = useState(true);

  const handleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div style={{ width: open ? "132px" : "392px" }} className="sidebar">
      <div
        className="title"
        style={{ justifyContent: open ? "flex-end" : "space-between" }}
      >
        <p className="txt" style={{ display: open ? "none" : "block" }}>
          Journey Board
        </p>
        <p id="arrow" onClick={handleSidebar}>
          <BsFillArrowRightCircleFill
            style={{ display: open ? "block" : "none" }}
          />
          <BsFillArrowLeftCircleFill
            style={{ display: open ? "none" : "block" }}
          />
        </p>
      </div>

      {projects.map((project) => {
        return project.tasks.map((task) => (
          <ul style={{ display: open ? "none" : "block" }} key={task.task_id}>
            <li key={task.task_id}>
              <p>{task.task_title}</p>
            </li>

            {task.assets.map((asset) => {
              return <li key={asset.asset_id}>{asset.asset_title}</li>;
            })}
          </ul>
        ));
      })}
    </div>
  );
};

export default Sidebar;
