'use strict';


//
// exports.http = (request, response) => {
//   response.status(200).send('Hello World!');
// };

exports.first = (request, response) => {
    response.status(200).send('Hello first!');
};


exports.test = (request, response) => {
    response.status(200).send('This is a test route on Google Cloud!');
};

exports.mongopost = async function (request, response) {
    //connection to mongodb database, save a name to devices collection
    const { uri } = require('./vars.js');
    const { MongoClient, ServerApiVersion } = require('mongodb');

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    const input = request.body;

    await client.connect();
    const collection = client.db("test").collection("devices");

    await collection.insertOne({ name: input.name });

    client.close();
    //   // const result = await users.find().toArray();
    //   client.close();
    // });
    response.status(201).send('Post created!');
};

exports.event = (event, callback) => {
  callback();
};
