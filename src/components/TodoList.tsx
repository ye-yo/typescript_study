import { useState } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { add, TodoListState } from "../store";
import { ITodoItem } from "../interfaces";

function TodoList() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state: TodoListState) => state.todos);
  const handleClickAdd = () => {
    const value = text.replace(/\s| /gi, "");
    if (value) {
      console.log("Add");
      dispatch(add(text));
      setText("");
    }
  };

  const handleChangeInput = (e: { target: HTMLInputElement }) => {
    setText(e.target.value);
  };
  return (
    <div className="todo-list">
      <div className="todo-input-box">
        <input
          className="todo-input"
          type="text"
          value={text}
          onChange={handleChangeInput}
        />
        <input value="추가" type="button" onClick={handleClickAdd} />
      </div>
      <div>
        {todos.map((todo: ITodoItem) => (
          <TodoItem key={todo.id} {...todo}></TodoItem>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
