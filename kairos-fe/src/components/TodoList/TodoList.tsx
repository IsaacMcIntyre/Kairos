import { TodoItemType } from '../../../../kairos-be/src/types/types'
import TodoItem from "../TodoItem/TodoItem";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./TodoList.module.css";
import axios, { AxiosError } from "axios";
import svg from "../../assets/loading-spinner.svg"
import Image from "next/image";

export type HandleChangeType = (
  id: TodoItemType["id"],
  change: ChangeEvent<HTMLInputElement>
) => void;

function TodoList() {
  const [todoItems, setTodoItems] = useState<TodoItemType[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4567/todo-items")
      .then(function (response) {
        console.log('setTodoItems', response.data)
        setTodoItems(response.data)
      })
      .catch(function (error: AxiosError) {
        console.log("error", error);
      });
  }, []);


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
      {todoItems.length > 0 ? <div className={styles.todoItemContainer}>{renderedTodoItems}</div> : <Image src={svg} alt="loading spinner" className={styles.loadingSpinner}></Image>}
    </div>
  );
}

export default TodoList;
