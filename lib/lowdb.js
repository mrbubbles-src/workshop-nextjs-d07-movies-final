import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import path from 'path';

const file = path.join(process.cwd(), 'db', 'db.json');

const adapter = new JSONFile(file);

const db = new Low(adapter, { users: [] });

export async function getDb() {
  await db.read();
  await db.write();
  return db;
}
