import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface TodoFormProps {
  onCreateTask: (todoText: string) => void;
}

export function TodoForm({ onCreateTask }: TodoFormProps) {
  const [todoText, setTodoText] = useState("");

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    onCreateTask(todoText);
    setTodoText("");
  }

  function handleTodoTextChange(event: ChangeEvent<HTMLInputElement>) {
    setTodoText(event.target.value);
  }

  const todoTextIsEmpty = todoText === "";

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        placeholder="Adicione uma nova tarefa"
        type="text"
        value={todoText}
        onChange={handleTodoTextChange}
      />
      <button type="submit" disabled={todoTextIsEmpty}>
        Criar
      </button>
    </form>
  );
}
