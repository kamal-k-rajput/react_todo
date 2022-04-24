import "./TodoElement.css";

import { useState } from "react";
export const TodoElement = ({ todo }) => {
  const [status, setstatus] = useState(todo.status);
  return (
    <div className="element">
      <span
        style={{
          textDecorationLine: status ? "line-through" : "",
        }}
        className="title"
      >
        {todo.title}
      </span>
      <span className="btn-status">
        <button
          onClick={() => {
            setstatus(!status);
          }}
        className="statusbutton"
        >
          Change Status
        </button>
      </span>
      <span className="status">{status ? "Completed" : "Not Completed"}</span>
    </div>
  );
};
