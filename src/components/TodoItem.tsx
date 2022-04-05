import { ITodoItem } from "../interfaces";
import { useDispatch } from "react-redux";
import { remove, toggle } from "../store";
import { memo } from "react";

function TodoItem({ id, content, isDone }: ITodoItem) {
  const dispatch = useDispatch();
  const handleToggleDone = () => {
    dispatch(toggle(id));
  };
  const handleClickRemove = () => {
    dispatch(remove(id));
  };
  return (
    <div className="todo-item">
      <input type="checkbox" checked={isDone} onChange={handleToggleDone} />
      <p>{content}</p>
      <button onClick={handleClickRemove}>x</button>
    </div>
  );
}

export default memo(TodoItem);
