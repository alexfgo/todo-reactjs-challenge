import { TodoTaskListItem } from "./TodoTaskListItem";
import { Task } from "./Task";

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
    <div>
      <span>Tarefas criadas {taskCount}</span>
      <span>
        Concluídas {taskDoneCount} de {taskCount}
      </span>
      <div>
        {todos.map((todo) => (
          <TodoTaskListItem
            key={todo.id}
            todo={todo}
            onTodoItemDone={onTaskDone}
            onTodoItemDelete={onTaskDelete}
          />
        ))}
      </div>
    </div>
  );
}
