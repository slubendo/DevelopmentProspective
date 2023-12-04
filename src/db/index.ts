import 'server-only'

import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

const sql = neon("postgres://app_role:hkDcEzSSrOpkKut71PpDMQ@ep-shiny-bonus-27364306.us-west-2.aws.neon.tech/neondb");
export const db = drizzle(sql);
