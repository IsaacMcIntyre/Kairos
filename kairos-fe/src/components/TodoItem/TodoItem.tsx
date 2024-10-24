import { TodoItemType } from '../../../../kairos-api/types'
import styles from "./TodoItem.module.css";
import { HandleChangeType } from "../TodoList/TodoList";

function TodoItem(props: {
  todoItem: TodoItemType;
  handleChange: HandleChangeType;
}) {
  return (
    <label
      className={styles.item && props.todoItem.ticked ? styles.ticked : ""}
    >
      <input
        type="checkbox"
        checked={props.todoItem.ticked}
        onChange={(bool) => props.handleChange(props.todoItem.id, bool)}
      ></input>
      {props.todoItem.itemName}
    </label>
  );
}

export default TodoItem;
