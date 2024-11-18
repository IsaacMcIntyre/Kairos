import express, { Request, Response } from 'express';
import cors from 'cors';
import knex from 'knex';
import { TodoItemType } from './types/types';
import knexConfig from '../knexfile';  // Import the knex config

// Initialize db
const db = knex(knexConfig);

const app = express();
app.use(cors());
app.use(express.json());

const port = 4567;

// Endpoint to fetch todo items from the database
app.get('/todo-items', async (req: Request, res: Response) => {
  try {
    const todos: TodoItemType[] = await db('todos').select();  // Query database for todos
    res.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ error: 'Failed to fetch todo items' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
