import { createContext, useContext, useState, type ReactNode } from "react";

export type Todo = {
  id: string;
  title: string;
  done: boolean;
}

type TodoContextValue = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

const defaultTodo: Todo = {id: "-1", title: "", done: false}
const emptyTodoList: Todo[] = []

const sampleTodos: Todo[] = [
  { id: "1", title: "Learn React Context", done: false },
  { id: "2", title: "Build a todo list", done: false },
  { id: "3", title: "Finish Lab 4", done: false },
]

const TodoContext = createContext<TodoContextValue | null>(null);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState(sampleTodos);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodosContext() {
  const value = useContext(TodoContext);
  if (!value) {
    throw new Error("useTodoContext must be used inside TodoProvider");
  }
  return value;
}