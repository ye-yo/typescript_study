import { useRef } from "react";
import TodoItem from "./TodoItem";
function TodoList() {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const addItem = (value: string) => {
    console.log(value);
  };
  const handleClickAdd = () => {
    const value = inputRef.current?.value.replace(/\s| /gi, "");
    if (value) {
      addItem(value);
    }
  };
  return (
    <div className="todo-list">
      <div className="todo-input">
        <input ref={inputRef} type="text" />
        <button onClick={handleClickAdd}>추가</button>
      </div>
      <div>
        <TodoItem />
      </div>
    </div>
  );
}

export default TodoList;
