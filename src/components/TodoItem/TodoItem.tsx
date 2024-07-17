
import type { TodoItemType } from "@/types";
import styles from "./TodoItem.module.css";

function TodoItem(props: {todoItem: TodoItemType}) {

    return (
        <label className={styles.todoItem && props.todoItem.ticked ? styles.ticked : ''}><input type='checkbox' checked={props.todoItem.ticked}></input>{props.todoItem.itemName}</label>
    )
}

export default TodoItem;