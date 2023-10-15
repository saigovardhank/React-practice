import { MongoClient } from "mongodb";
import { MONGODB_URI, DATABASE_NAME } from "./config";

let connnectedClient;

export const connectClient = async () => {
    if(connnectedClient) {
        return connnectedClient.db(DATABASE_NAME);
    }
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    await client.db(DATABASE_NAME).command({ping: 1});
    console.info("Connnected to MongoDB");

    connnectedClient = client;

    return connnectedClient.db(DATABASE_NAME);
}

export const stopClient = async () => {
    await connnectedClient?.close();
}