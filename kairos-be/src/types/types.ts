type SerializedDate = number;  // Timestamp (milliseconds since Unix epoch)

export type TodoItemType = {
	id: number,
	itemName: string,
	creationTime: Date,
	ticked: boolean
	tickedTime?: Date
}


export type SerializedTodoItemType = {
	id: number,
	itemName: string,
	creationTime: SerializedDate,
	ticked: boolean
	tickedTime?: SerializedDate
}