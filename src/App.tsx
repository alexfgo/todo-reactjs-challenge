import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { Task } from "./components/Task";
import { TodoTaskList } from "./components/TodoTaskList";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";

function App() {
  const [todos, setTodos] = useState<Task[]>([]);
  const [taskCount, setTaskCount] = useState<number>(0);
  const [taskDoneCount, setTaskDoneCount] = useState<number>(0);

  function handleOnCreateTask(content: string) {
    const newItemId = uuidv4();
    setTodos([...todos, new Task(newItemId, content, false)]);
    setTaskCount(taskCount + 1);
  }

  function handleOnTodoTaskDone(itemId: string, isDone: boolean) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === itemId) {
        todo.done = isDone;
        setTaskDoneCount(taskDoneCount + (isDone ? 1 : -1));
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function handleOnTodoTaskDelete(itemId: string) {
    const updatedTodos = todos.filter((todo) => {
      if (todo.id === itemId && todo.done) setTaskDoneCount(taskDoneCount - 1);
      return todo.id !== itemId;
    });

    setTodos(updatedTodos);
    setTaskCount(taskCount - 1);
  }

  return (
    <div>
      <Header />
      <TodoForm onCreateTask={handleOnCreateTask} />
      <TodoTaskList
        todos={todos}
        taskCount={taskCount}
        taskDoneCount={taskDoneCount}
        onTaskDone={handleOnTodoTaskDone}
        onTaskDelete={handleOnTodoTaskDelete}
      />
    </div>
  );
}

export default App;
