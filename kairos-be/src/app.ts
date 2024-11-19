import express, { Request, Response } from 'express';
import cors from 'cors';
import knex from 'knex';
import { TodoItemType } from './types/types';
import knexConfig from '../knexfile'; 

const db = knex(knexConfig);

const app = express();
app.use(cors());
app.use(express.json());

const port = 4567;

app.get('/todo-items', async (_req: Request, res: Response) => {
  try {
    const todos: TodoItemType[] = await db('todos').select(); 
    const serializedTodos = todos.map(todo => ({
      ...todo,
      creationTime: todo.creationTime?.getTime(),
      tickedTime: todo.tickedTime?.getTime(),
    }));
    res.json(serializedTodos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ error: 'Failed to fetch todo items' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
