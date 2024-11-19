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

function TodoList(props: {
  todoItems: TodoItemType[];
  handleChange: HandleChangeType;
}) {
  const renderedTodoItems = props.todoItems.map((todoItem) => (
    <TodoItem
      todoItem={todoItem}
      handleChange={props.handleChange}
      key={todoItem.id}
    />
  ));

  return (
    <div className={styles.todoList}>
      <h2>Todo List</h2>
      {props.todoItems.length > 0 ? <div className={styles.todoItemContainer}>{renderedTodoItems}</div> : <Image src={svg} alt="loading spinner" className={styles.loadingSpinner}></Image>}
    </div>
  );
}

export default TodoList;
