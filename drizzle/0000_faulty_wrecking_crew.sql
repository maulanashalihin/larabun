CREATE TABLE `posts` (
	`id` integer,
	`title` text,
	`body` text,
	`user_id` integer,
	`created_at` text,
	`updated_at` text
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer  PRIMARY  KEY NOT NULL,
	`name` text,
	`email` text,
	`password` text,
	`created_at` text,
	`updated_at` text
);
