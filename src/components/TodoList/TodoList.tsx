import type { TodoItemType } from "@/types";
import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";

function TodoList() {
    const [todoItems, setTodoItems] = useState<TodoItemType[]>([{id: 0, itemName: 'Clean washing machine', creationTime: new Date('2024-03-17T03:24:00'), ticked: false }, {id: 1, itemName: 'Wash dishes', creationTime: new Date('2024-05-20T15:20:00'), ticked: false }, {id: 2, itemName: 'Hoover basement', creationTime: new Date('2024-05-20T15:22:24'), ticked: true }])
    const renderTodoItems = todoItems.map(todoItem => <TodoItem todoItem={todoItem} key={todoItem.id} />)
    return (
        <div>
            <h2>Todo List</h2>
            {renderTodoItems}
        </div>
    )
}

export default TodoList;