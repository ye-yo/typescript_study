function TodoItem() {
  const handleToggleDone = () => {};
  const handleClickRemove = () => {};
  return (
    <div className="todo-item">
      <input type="checkbox" onChange={handleToggleDone} />
      <p>투두 아이템</p>
      <button onClick={handleClickRemove}>x</button>
    </div>
  );
}

export default TodoItem;
