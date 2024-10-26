import React from "react";
import "./Done.css";
import Lottie from "lottie-react";
import done from "../../../public/Animation/done.json";

const Done = () => {
  return (
    <>
      <section className="done-wrapper">
        <div className="done-content">
          <div className="done-animation">
            <Lottie animationData={done} className="done-lottie" />
          </div>
          <div className="done-tasks-container">
            <h3 className="done-title">
              Completed Tasks <span className="done-count">4</span>
            </h3>
            <div className="done-tasks-list">
              <div className="done-task" data-index="0">
                <span className="done-task-name">Complete React Project</span>
                <span className="done-task-timestamp">2024-10-25 10:30 AM</span>
              </div>
              <div className="done-task" data-index="1">
                <span className="done-task-name">Submit Assignment</span>
                <span className="done-task-timestamp">2024-10-24 02:00 PM</span>
              </div>
              <div className="done-task" data-index="2">
                <span className="done-task-name">Client Meeting</span>
                <span className="done-task-timestamp">2024-10-23 05:00 PM</span>
              </div>
              <div className="done-task" data-index="3">
                <span className="done-task-name">Code Review</span>
                <span className="done-task-timestamp">2024-10-22 08:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Done;
