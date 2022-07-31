import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { Task } from "./components/Task";
import { TodoTaskList } from "./components/TodoTaskList";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState<Task[]>([]);
  const [taskDoneCount, setTaskDoneCount] = useState<number>(0);

  function handleOnCreateTask(content: string) {
    const newItemId = uuidv4();
    setTodos([...todos, new Task(newItemId, content, false)]);
  }

  function handleOnTaskDone(itemId: string, isDone: boolean) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === itemId) {
        todo.done = isDone;
        setTaskDoneCount(taskDoneCount + (isDone ? 1 : -1));
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function handleOnTaskDelete(itemId: string) {
    const updatedTodos = todos.filter((todo) => {
      if (todo.id === itemId && todo.done) setTaskDoneCount(taskDoneCount - 1);
      return todo.id !== itemId;
    });

    setTodos(updatedTodos);
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <TodoForm onCreateTask={handleOnCreateTask} />
        <TodoTaskList
          todos={todos}
          taskCount={todos.length}
          taskDoneCount={taskDoneCount}
          onTaskDone={handleOnTaskDone}
          onTaskDelete={handleOnTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
