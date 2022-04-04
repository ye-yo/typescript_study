import { useMemo } from "react";
import { useSelector } from "react-redux";
import TodoList from "./components/TodoList";
import { ITodoItem } from "./interfaces";
import { TodoListState } from "./store";

const countDone = (todos: ITodoItem[]) =>
  todos.reduce((cnt: number, item: ITodoItem) => {
    return cnt + (item.isDone === true ? 1 : 0);
  }, 0);

function App() {
  const todos = useSelector((state: TodoListState) => state.todos);
  const done = useMemo(() => countDone(todos), [todos]);

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
        <h3>
          {done}/{todos.length}
        </h3>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
