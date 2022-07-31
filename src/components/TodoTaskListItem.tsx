import { ChangeEvent } from "react";
import { Task } from "./Task";
import { Trash } from "phosphor-react";

import styles from "./TodoTaskListItem.module.css";

interface TodoItemProps {
  todo: Task;
  onTaskDone: (todoItemId: string, isDone: boolean) => void;
  onTaskDelete: (todoItemId: string) => void;
}

export function TodoTaskListItem({
  todo,
  onTaskDone,
  onTaskDelete,
}: TodoItemProps) {
  function handleOnDone(event: ChangeEvent<HTMLInputElement>) {
    const isDone: boolean = event?.target.checked;
    onTaskDone(todo.id, isDone);
  }

  function handleOnDelete() {
    onTaskDelete(todo.id);
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" onChange={handleOnDone} checked={todo.done} />
      {todo.done ? (
        <span className={styles.done}>{todo.content}</span>
      ) : (
        <span>{todo.content}</span>
      )}
      <button value={todo.id} onClick={handleOnDelete}>
        <Trash size={20} />
      </button>
    </div>
  );
}
