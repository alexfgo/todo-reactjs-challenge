import { ChangeEvent } from "react";
import { Task } from "./Task";

interface TodoItemProps {
  todo: Task;
  onTodoItemDone: (todoItemId: string, isDone: boolean) => void;
  onTodoItemDelete: (todoItemId: string) => void;
}

export function TodoTaskListItem({
  todo,
  onTodoItemDone,
  onTodoItemDelete,
}: TodoItemProps) {
  function handleOnDone(event: ChangeEvent<HTMLInputElement>) {
    const isDone: boolean = event?.target.checked;
    onTodoItemDone(todo.id, isDone);
  }

  function handleOnDelete() {
    onTodoItemDelete(todo.id);
  }

  return (
    <div>
      <input type="checkbox" onChange={handleOnDone} checked={todo.done} />
      <span>{todo.content}</span>
      <button value={todo.id} onClick={handleOnDelete}>
        Delete
      </button>
    </div>
  );
}
