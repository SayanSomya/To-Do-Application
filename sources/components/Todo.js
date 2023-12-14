import React, { useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import List from "./List";
const Todo = () => {
  const [todo, setTodo] = useState("");

  const [add, setAdd] = useState([]);

  const [validation, setValidation] = useState("");
  const setData = (e) => {
    // console.log(e.target.value);
    setTodo(e.target.value);
  };

  const additems = () => {
    if (todo === "") {
      setValidation("Please enter your todo");
    } else {
      setAdd(() => {
        return [...add, todo];
      });
      setTodo("");
      setValidation("");
    }
  };
  const dltitems = (id) => {
    const dltdate = add.filter((el, ind) => {
      return ind !== id;
    });
    setAdd(dltdate);
  };

  return (
    <div className="main-container">
      <div className="todo-box">
        <img
          className="todoimg"
          src="https://w7.pngwing.com/pngs/972/511/png-transparent-todo-sketch-note-list-tasks.png"
          alt="todoimg"
        />
        <h2 className="heading">Write your Todo List here</h2>
        <h3 className="validation">{validation}</h3>
        <div className="input-container">
          <input
            type="text"
            name="todo"
            value={todo}
            onChange={setData}
            placeholder="Add your todo here"
          />
          <Tooltip title="Add">
            <Button className="addbtn" onClick={additems}>
              <AddIcon />
            </Button>
          </Tooltip>
        </div>
        <div className="store-container">
          <ul>
            {add.map((ele, index) => {
              return (
                <>
                  <List id={index} text={ele} dltitems={dltitems} />
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
