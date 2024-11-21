import express, { Request, Response } from 'express';
import cors from 'cors';
import knex from 'knex';
import { TodoItemType } from './types/types';
import knexConfig from '../knexfile'; 
import fs from 'fs';

const db = knex(knexConfig);

const app = express();
app.use(cors());
app.use(express.json());

const port = 4567;

app.get('/todo-items', async (_req: Request, res: Response) => {
  try {
    const query = fs.readFileSync('./db/queries/mainTodoList.sql', 'utf8');
    const dbres = await db.raw(query); 
    const serializedTodos = dbres.rows.map(todo => ({
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

app.get('/todo-items', async (req: Request, res: Response) => {
  try {
    const query = fs.readFileSync('./db/queries/hiddenTodoList.sql', 'utf8');
    const dbres = await db.raw(query); 
    const serializedTodos = dbres.rows.map(todo => ({
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
