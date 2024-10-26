import React, { useEffect } from "react";
import "./ToDo.css";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const ToDo = () => {
  useEffect(() => {}, []);

  return (
    <>
      <section className="container">
        <div className="input">
          <input placeholder="Add your todo tasks" type="text" />
        </div>
        <div className="flex justify-center">
          <button className="btn">Add task</button>
        </div>
        <div className="tasks-div">
          <h3>
            Pending tasks to do <span>7/10</span>
          </h3>
          <div className="mb-20">
            <div className="tasks">
              <div className="flex gap-2">
                <span>
                  <MdCheckBoxOutlineBlank />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, ex.
              </div>
            </div>
            <div className="tasks">
              <div className="flex gap-2">
                <span>
                  <MdCheckBoxOutlineBlank />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, ex.
              </div>
            </div>
            <div className="tasks">
              <div className="flex gap-2">
                <span>
                  <MdCheckBoxOutlineBlank />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, ex.
              </div>
            </div>
            <div className="tasks">
              <div className="flex gap-2">
                <span>
                  <MdCheckBoxOutlineBlank />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, ex.
              </div>
            </div>
            <div className="tasks">
              <div className="flex gap-2">
                <span>
                  <MdCheckBoxOutlineBlank />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, ex.
              </div>
            </div>
            <div className="tasks">
              <div className="flex gap-2">
                <span>
                  <MdCheckBoxOutlineBlank />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, ex.
              </div>
            </div>
            <div className="tasks">
              <div className="flex gap-2">
                <span>
                  <MdCheckBoxOutlineBlank />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, ex.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToDo;
