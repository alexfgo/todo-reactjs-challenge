import { TodoTaskListItem } from "./TodoTaskListItem";
import { Task } from "./Task";

import styles from "./TodoTaskList.module.css";
import emptyListImg from "../assets/clipboard.png";

export interface TodoListProps {
  todos: Task[];
  taskCount: number;
  taskDoneCount: number;
  onTaskDone: (itemId: string, isDone: boolean) => void;
  onTaskDelete: (itemId: string) => void;
}

export function TodoTaskList({
  todos,
  taskCount,
  taskDoneCount,
  onTaskDone,
  onTaskDelete,
}: TodoListProps) {
  return (
    <div className={styles.list}>
      <header>
        <div className={styles.taskCountLabel}>
          Tarefas criadas{" "}
          <span className={styles.taskCounter}>{taskCount}</span>
        </div>
        <div className={styles.taskDoneCountLabel}>
          Concluídas{" "}
          <span className={styles.taskCounter}>
            {taskDoneCount} {taskDoneCount > 0 ? `de ${taskCount}` : ""}
          </span>
        </div>
      </header>
      {taskCount === 0 ? (
        <main className={styles.listEmpty}>
          <img src={emptyListImg} alt="Empty todo list image" />
          <span className={styles.line1}>
            Você ainda não tem tarefas cadastradas
          </span>
          <span className={styles.line2}>
            Crie tarefas e organize seus itens a fazer
          </span>
        </main>
      ) : (
        <main>
          {todos.map((todo) => (
            <TodoTaskListItem
              key={todo.id}
              todo={todo}
              onTaskDone={onTaskDone}
              onTaskDelete={onTaskDelete}
            />
          ))}
        </main>
      )}
    </div>
  );
}
