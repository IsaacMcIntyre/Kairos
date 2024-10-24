"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4567;
app.get('/todo-items', (req, res) => {
    const initialList = [
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
    ];
    res.json(initialList);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
