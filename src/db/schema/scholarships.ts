import { serial, text, boolean, pgTable, AnyPgColumn } from "drizzle-orm/pg-core"
import { users } from "./users"


export const scholarships = pgTable("scholarships", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id),
    jsonData: text("jsonData").notNull(),
    isApplied: boolean("isApplied").notNull(),
})

export type Scholarship = typeof scholarships.$inferSelect
export type NewScholarship = typeof scholarships.$inferInsert