import { migrate } from "drizzle-orm/bun-sqlite/migrator";

import { drizzle, BunSQLiteDatabase } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
 
const sqlite = new Database('sqlite.db');
const db: BunSQLiteDatabase = drizzle(sqlite);
  

await migrate(db, { migrationsFolder: "drizzle" });