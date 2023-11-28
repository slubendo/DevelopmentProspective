import { serial, text, boolean, pgTable, uuid, AnyPgColumn } from "drizzle-orm/pg-core"
import { users } from "./users"


export const formResults = pgTable("form results", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id),
    scholarshipArray: text("scholarship array").notNull(),
})

export type FormResult = typeof formResults.$inferSelect
export type NewFormResult = typeof formResults.$inferInsert