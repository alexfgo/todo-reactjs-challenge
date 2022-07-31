import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import styles from "./TodoForm.module.css";

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

  function handleTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setTodoText(event.target.value);
  }

  const todoTextIsEmpty = todoText === "";

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        placeholder="Adicione uma nova tarefa"
        type="text"
        value={todoText}
        onChange={handleTaskTextChange}
      />
      <button type="submit" disabled={todoTextIsEmpty}>
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
