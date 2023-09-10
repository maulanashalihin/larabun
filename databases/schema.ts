  
import { integer,text,sqliteTable } from "drizzle-orm/sqlite-core";


export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  password: text("password"), 
  createdAt: text("created_at"),
  updatedAt: text("updated_at"),
});

export const posts = sqliteTable("posts", {
  id: integer("id"),
  title: text("title"),
  body: text("body"),
  userId: integer("user_id"),
  createdAt: text("created_at"),
  updatedAt: text("updated_at"),
});