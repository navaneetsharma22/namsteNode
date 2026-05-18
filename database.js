const {MongoClient} = require("mongodb");

const url = "mongodb+srv://ksharma112288_db_user:aSyJS0uQeFAwthZH@database.o67zro2.mongodb.net/";

const client = new MongoClient(url);

const dbName = "NamsteNode";

async function main () {

    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    const collection = db.collection("users");


    return "done.";


}.close

main() 
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
    