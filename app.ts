
import { drizzle, BunSQLiteDatabase } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import { users } from './databases/schema';
 
const sqlite = new Database('sqlite.db');
const db: BunSQLiteDatabase = drizzle(sqlite);
  
const result = await db.select().from(users);
 

import "./routes/web.ts";
import Route from "./routes/index.ts";



const server = Bun.serve({
    port: 3000,
    async fetch(request) {
      
      const result =  await Route.use(request)
      
      if(result)
      { 
        return result;

      }else{
        return new Response("404", {status : 404})
      }
      
    }, 
  });
  
  console.log(`Listening on http://localhost:${server.port}`);