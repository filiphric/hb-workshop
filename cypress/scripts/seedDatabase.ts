import * as fs from 'fs';
import * as path from 'path';
const dbPath = path.resolve('./trelloapp/backend/data/database.json')

const empty = {
  boards: [],
  lists: [],
  cards: [],
  users: []
}

export const seedDatabase = (data: Record<string, any> = empty) => {

  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))

  return data;

};