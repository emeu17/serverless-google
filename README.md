# Serverless Google project

Contains a test function returning "This is a test route on Google Cloud!"
Also contains a test route for adding a name to a test-database on MongoDB Atlas

baseurl/test    - test route
baseurl/mongpost - post a name in a test database

# Todo in order to run locally/on Google cloud
- Install serverless *npm install -g serverless*
- Create a Google Cloud billing account according to https://www.serverless.com/framework/docs/providers/google/guide/credentials, including setting up a credentials keyfile
- Download this repository and run *npm install*
- Run *serverless deploy* to deploy to Google
- The variable uri needs to be added in a file *vars.js*, which is used in the database route. This requires an acocunt on https://www.mongodb.com/, click Try Free to create an account and you can follow this guide for creating a mongodb database and connecting to it: https://www.serverless.com/blog/how-to-use-mongodb-with-serverless-cloud

# Google Functions

Refer to [Serverless docs](https://www.serverless.com/framework/docs/providers/google/guide/quick-start) for more information.


# changes
2022-05-31 A test route connecting to Mongodb Atlas https://www.mongodb.com/ is created and deployed, creating a post in the *test* database and collection *devices*. Also changed the runtime in serverless.yml to nodejs14 (from 10) because of a textencoder issue which was then resolved.
