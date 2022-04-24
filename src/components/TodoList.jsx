
import "./TodoList.css";
import { TodoElement } from "./TodoElement";
import { nanoid } from "nanoid";
export const TodoList = ({ data }) => {
  return (
    <div className="TodoList">
      {data.map((todo) => {
        return <TodoElement key={nanoid(6)} todo={todo}></TodoElement>;
      })}
    </div>
  );
};
