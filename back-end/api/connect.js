import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://renatoneckeldev:Pvevremp0104.@renatoneckel.twl0q.mongodb.net/?retryWrites=true&w=majority&appName=RenatoNeckel";

const client = new MongoClient(URI);

export const db = client.db("SpotifyAula");
// const songCollection = await db.collection(`songs`).find({}).toArray();

// console.log(db);
