"use client";

import styles from "./page.module.css";
import TodoListWrapper from "@/components/TodoListWrapper/TodoListWrapper";

export default function Home() {
  return (
    <main className={styles.main}>
      <TodoListWrapper />
    </main>
  );
}
