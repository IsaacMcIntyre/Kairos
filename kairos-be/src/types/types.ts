export type TodoItemType = {
    id: number,
    itemName: string,
    creationTime: Date,
    ticked: boolean
    whenTicked?: Date
}