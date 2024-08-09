import type { TodoItemType } from "@/types";
import TodoItem from "../TodoItem/TodoItem";
import { ChangeEvent, useState } from "react";
import styles from "./TodoList.module.css";
import axios, { AxiosError } from "axios";

export type HandleChangeType = (
  id: TodoItemType["id"],
  change: ChangeEvent<HTMLInputElement>
) => void;

axios
  .get("http://localhost:4567/todo-items")
  .then(function (response) {
    console.log("response", response);
  })
  .catch(function (error: AxiosError) {
    console.log("error", error);
  });

function TodoList() {
  const [todoItems, setTodoItems] = useState<TodoItemType[]>([
    {
      id: 0,
      itemName: "Clean washing machine",
      creationTime: new Date("2024-03-17T03:24:00"),
      ticked: false,
    },
    {
      id: 1,
      itemName: "Wash dishes",
      creationTime: new Date("2024-05-20T15:20:00"),
      ticked: false,
    },
    {
      id: 2,
      itemName: "Hoover basement",
      creationTime: new Date("2024-05-20T15:22:24"),
      ticked: true,
    },
  ]);

  const handleTodoItemChange: HandleChangeType = (id, change) => {
    // TODO: handle backend update
    const updatedChecked = change.target.checked;

    setTodoItems((prevTodoItems) =>
      prevTodoItems.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, ticked: updatedChecked } : todoItem
      )
    );
  };

  const renderedTodoItems = todoItems.map((todoItem) => (
    <TodoItem
      todoItem={todoItem}
      handleChange={handleTodoItemChange}
      key={todoItem.id}
    />
  ));

  return (
    <div className={styles.todoList}>
      <h2>Todo List</h2>
      <div className={styles.todoItemContainer}>{renderedTodoItems}</div>
    </div>
  );
}

export default TodoList;
