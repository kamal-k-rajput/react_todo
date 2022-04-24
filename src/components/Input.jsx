import "./Input.css";
import { useState } from "react";

export const Input = ({ taskfun }) => {
  const [text, settext] = useState("");
  return (
    <div className="input-container">
      <label>
        <input
          type="text"
          placeholder="Add a to-do.."
          onChange={(e) => {
            e.preventDefault();
            settext(e.target.value);
          }}
        />
      </label>
      <button
        className="btn-add"
        onClick={() => {
          if (text.length > 0) {
            taskfun.callback(text);
          }
        }}
      >
        ADD TASK
      </button>
    </div>
  );
};
