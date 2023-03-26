import React from "react";
import { useContext } from "react";
import { TasksContext } from "../context/Tasks";
import Assets from "./Assets";
import "./Task.css";

const Task = () => {
  const { tasks } = useContext(TasksContext);

  // let { title } = tasks[0];
  // let taskInfo = tasks[0].tasks[0];
  // let { task_description } = taskInfo;
  // let { task_title } = taskInfo;
  // console.log(task_description, task_title);
  let projects = tasks;

  return (
    <>
      {projects.map((project, id) => {
        return (
          <>
            <div className="task">
              <div className="top" key={id}>
                <h1>{project.title}</h1>
                <button>Submit task</button>
              </div>
              {project.tasks
                ? project.tasks.map((task, id) => {
                    return (
                      <div className="bottom" key={id}>
                        <h3>{task.task_title}</h3>
                        <p>{task.task_description}</p>
                      </div>
                    );
                  })
                : ""}
            </div>
            <Assets data={projects} />
          </>
        );
      })}
    </>
  );
};

export default Task;
