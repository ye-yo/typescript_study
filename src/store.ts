import { ITodoItem } from "./interfaces";
// 액션 Type 선언
const ADD = "todo/ADD" as const;
const REMOVE = "todo/REMOVE" as const;
const TOGGLE = "todo/TOGGLE" as const;

// 액션 생성 함수 만들기
export const add = (content: string) => ({
  type: ADD,
  payload: content,
});
export const remove = (itemId: number) => ({
  type: REMOVE,
  payload: itemId,
});
export const toggle = (itemId: number) => ({
  type: TOGGLE,
  payload: itemId,
});

//액션 객체 type 선언
type TodoListAction =
  | ReturnType<typeof add>
  | ReturnType<typeof remove>
  | ReturnType<typeof toggle>;

// 모듈 state의 type 및 초기값 선언
export type TodoListState = {
  todos: ITodoItem[];
};

const initialState: TodoListState = {
  todos: [],
};

// reducer 리듀서 작성
function todoListReducer(
  state: TodoListState = initialState,
  action: TodoListAction
): TodoListState {
  switch (action.type) {
    case ADD:
      const length = state.todos.length;
      const lastId = length > 0 ? state.todos[length - 1].id++ : 0;
      return {
        todos: [
          ...state.todos,
          { id: lastId, content: action.payload, isDone: false },
        ],
      };
    case REMOVE:
      return {
        todos: state.todos.filter(
          (item: { id: number }) => item.id !== action.payload
        ),
      };
    case TOGGLE:
      return {
        todos: state.todos.map((item) =>
          item.id === action.payload ? { ...item, isDone: !item.isDone } : item
        ),
      };
    default:
      return state;
  }
}

export default todoListReducer;
