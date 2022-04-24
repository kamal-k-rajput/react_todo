import { Input } from "./Input";
import { TodoList } from "./TodoList";
import { useState } from "react";

export const Todo = () => {
  const [todoListData, settodoListData] = useState([]);
  const callback = (value) => {
    let taskdetail = { title: value, status: false };
    settodoListData([...todoListData, taskdetail]);
  };
  return (
    <div>
      <h3>Add Your planner </h3>
      <TodoList data={todoListData}></TodoList>
      <Input taskfun={{ callback }}></Input>
    </div>
  );
};
