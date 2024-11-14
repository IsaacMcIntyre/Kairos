import express, { Request, Response } from 'express';
import cors from 'cors';
// const cors = require('cors')
import { TodoItemType } from './types/types'

const app = express()
app.use(cors());

const port = 4567

app.get('/todo-items', (req: Request, res: Response, _next) => {
  console.log('todo-items hit', {cors})
  const initialList: TodoItemType[] = [
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
    {
      id: 3,
      itemName: "Dynamic Timed",
      creationTime: new Date(new Date().getDate() + 7),
      ticked: false,
    },
  ]

  res.json(initialList)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})