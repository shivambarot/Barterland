/* Author : Vikram Babu Rajendran */

const MongoClient = require("mongodb").MongoClient;
const connectionString = process.env.ATLAS_URI;

let _database;

// Function to connect to MongoDB
const connectDB = async (callback) => {
  MongoClient.connect(
    connectionString,
    { useUnifiedTopology: true, useNewUrlParser: true },
    function (err, client) {
      _database = client.db("barterland");
      console.log("Connected to database!");
      return callback(err);
    }
  );
};

const getDatabase = () => _database;

const disconnectDB = () => _database.close();

module.exports = { connectDB, getDatabase, disconnectDB };
