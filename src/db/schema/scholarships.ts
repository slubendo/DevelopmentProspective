import { serial, text, boolean, pgTable, uuid, AnyPgColumn } from "drizzle-orm/pg-core"
import { users } from "./users"


export const scholarships = pgTable("scholarships", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id),
    jsonData: text("jsonData").notNull(),
    isApplied: boolean("is_applied").notNull(),
})

export type Scholarship = typeof scholarships.$inferSelect
export type NewScholarship = typeof scholarships.$inferInsert