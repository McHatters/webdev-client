import { useState } from 'react';
import { Todo, useTodosContext } from './TodosContext';


export default function ReactContextTodoList() {

  const createTodo = (title: string): Todo => {
    return {id: crypto.randomUUID(), title: title, done: false}
  }

  const [todoName, setTodoName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const { todos, setTodos } = useTodosContext();

  const addTodo = () => {
    if (!todoName) return;
    setTodos([...todos, createTodo(todoName)]);
    setTodoName("");
  };

  const updateTodo = (updated: Todo) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditTitle(todo.title);
  };

  const saveEdit = (todo: Todo) => {
    if (editTitle) updateTodo({ ...todo, title: editTitle });
    setEditingId(null);
  };

  return (
    <div className="max-w-xl">
      <h3>Todos List</h3>
      <input
        type="text"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        className="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
      />
      <button
      type="button"
      onClick={addTodo}
      className="mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">
        Add Todo
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 py-1">
            <input
            type="checkbox"
            checked={todo.done}
            onChange={() => updateTodo({ ...todo, done: !todo.done })}/>

            {editingId === todo.id ? (
              <>
                <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="flex-1 rounded border border-neutral-300 px-2 py-1"/>
                <button
                type="button"
                onClick={() => saveEdit(todo)}
                className="rounded bg-green-600 px-3 py-1 text-sm font-medium text-white">
                  Save
                </button>
              </>
            ) : (
              <>
                <span className={`flex-1`}>{todo.title}</span>
                <button
                type="button"
                onClick={() => startEditing(todo)}
                className="rounded bg-yellow-600 px-3 py-1 text-sm font-medium text-white">
                  Edit
                </button>
              </>
            )}

            <button
            type="button"
            onClick={() => deleteTodo(todo.id)}
            className="rounded bg-red-600 px-3 py-1 text-sm font-medium text-white">
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>

  );
}