import axios, { AxiosError } from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { SerializedTodoItemType } from "../../../../kairos-be/src/types/types";
import TodoList from "../TodoList/TodoList";

export type HandleChangeType = (
	id: SerializedTodoItemType["id"],
	change: ChangeEvent<HTMLInputElement>
) => void;

const sortMainList = (todos: SerializedTodoItemType[]) => {
	return todos
		.filter(todo => !todo.ticked)  // unticked items
		.sort((a, b) => a.creationTime! - b.creationTime!);  // sort unticked items by creation date
}

const sortTempTickedList = (todos: SerializedTodoItemType[]) => {
	return todos
		.filter(todo => todo.ticked && Date.now() - todo.tickedTime! < 300000)  // ticked items in the last 5 minutes
		.sort((a, b) => b.tickedTime! - a.tickedTime!);  // sort ticked items by tickedTime, latest first
}

const sortHiddenList = (todos: SerializedTodoItemType[]) => {
	return todos
		.filter(todo => todo.ticked && Date.now() - todo.tickedTime! >= 300000)  // ticked items over 5 minutes
		.sort((a, b) => b.tickedTime! - a.tickedTime!);  // sort ticked items by tickedTime, latest first
}



function TodoListWrapper() {
	const [todoItems, setTodoItems] = useState<SerializedTodoItemType[]>([]);

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

	useEffect(() => {
		console.log('sortMainList', sortMainList(todoItems))
		console.log('sortTempTickedList', sortTempTickedList(todoItems))
		console.log('sortHiddenList', sortHiddenList(todoItems))
	}, todoItems)

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