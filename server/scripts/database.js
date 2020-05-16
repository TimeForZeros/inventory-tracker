const { MongoClient } = require('mongodb');


async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
async function main() {
  const uri =
    'mongodb+srv://SEI:PFdJpjQqR4lDSJI4@sei-j1km6.azure.mongodb.net/test?retryWrites=true&w=majority';
  // const url = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
