import todoLogo from "../assets/rocket.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo do Todo App" />
      <span>to</span>
      <span>do</span>
    </header>
  );
}
