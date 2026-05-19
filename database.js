const {MongoClient} = require("mongodb");

const url = "mongodb+srv://ksharma112288_db_user:aSyJS0uQeFAwthZH@database.o67zro2.mongodb.net/";

const client = new MongoClient(url);

const dbName = "sample_mflix";

async function main () {

    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    const collection = db.collection("users");
//   const data = {
//       name: "Karan",
//       email: "karan@gmail.com",
//       department: "IT"
//    }

//   const insertResult = await collection.insertMany([data]);
//   console.log('insertResult: ', insertResult);
    // READ Data from the collection
    // const findResult = await collection.find({}).toArray();
    // console.log('findResult: ', findResult);

    // const countResult = await collection.countDocuments({});
    // console.log("countResult: ", countResult);
    

    //Filtering data

    const result = await collection.find({department: "IT"}).toArray();
    console.log("result: ", result);


    return "done.";


}
 
main() 
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

