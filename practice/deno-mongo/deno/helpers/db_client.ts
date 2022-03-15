import {
  Bson,
  MongoClient,
} from "https://deno.land/x/mongo@v0.29.2/mod.ts";
let db: Database;

export function connect() {
  const client = new MongoClient();
  client.connectWithUri(
    'mongodb+srv://amithsai222:abcdefghij@cluster0.fbas0.mongodb.net/?retryWrites=true&w=majority'
  );

  db = client.database('todo-app');
}

export function getDb() {
  return db;
}
