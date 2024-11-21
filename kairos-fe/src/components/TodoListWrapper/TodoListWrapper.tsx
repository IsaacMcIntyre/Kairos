import axios, { AxiosError } from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { SerializedTodoItemType } from "../../../../kairos-be/src/types/types";
import TodoList from "../TodoList/TodoList";

export type HandleChangeType = (
	id: SerializedTodoItemType["id"],
	change: ChangeEvent<HTMLInputElement>
) => void;

function TodoListWrapper() {
	const [todoItems, setTodoItems] = useState<SerializedTodoItemType[]>([]);
	const [hiddenTodoItems, setHiddenTodoItems] = useState<SerializedTodoItemType[]>([])

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
		const newCheckedValue = change.target.checked;

		setTodoItems((prevTodoItems) =>
			prevTodoItems.map((todoItem) =>
				todoItem.id === id ? { ...todoItem, ticked: newCheckedValue, tickedTime: newCheckedValue ? new Date().getTime() : undefined } : todoItem
			)
		);
	};

	return (
		<React.Fragment>
			<TodoList handleChange={handleTodoItemChange} todoItems={todoItems} />
		</React.Fragment>
	)
}

export default TodoListWrapper;